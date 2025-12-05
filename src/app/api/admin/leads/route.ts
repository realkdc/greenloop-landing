import { NextResponse } from 'next/server';
import { getRedisClient } from '@/lib/redis';

export async function GET() {
  try {
    const redis = await getRedisClient();
    
    // Get all lead IDs from the list
    const leadIds = await redis.lRange('leads:list', 0, -1);
    
    if (!leadIds || leadIds.length === 0) {
      return NextResponse.json({ leads: [] });
    }

    // Fetch all lead data
    const leads = await Promise.all(
      leadIds.map(async (id) => {
        const leadDataStr = await redis.get(id);
        if (leadDataStr) {
          try {
            const leadData = JSON.parse(leadDataStr);
            return { id, ...leadData };
          } catch {
            return null;
          }
        }
        return null;
      })
    );

    // Filter out nulls and sort by timestamp (newest first)
    const validLeads = leads
      .filter(lead => lead !== null)
      .sort((a, b) => {
        const dateA = new Date((a as any).timestamp).getTime();
        const dateB = new Date((b as any).timestamp).getTime();
        return dateB - dateA;
      });

    return NextResponse.json({ leads: validLeads });
  } catch (error) {
    console.error('Error fetching leads:', error);
    
    // If Redis is not configured, return empty array
    if (error instanceof Error && (error.message.includes('REDIS') || error.message.includes('Connection'))) {
      return NextResponse.json({ 
        leads: [],
        message: 'Redis database not connected yet. Connect the database in Vercel dashboard.'
      });
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

