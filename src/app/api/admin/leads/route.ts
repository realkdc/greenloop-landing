import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    // Get all lead IDs from the list
    const leadIds = await kv.lrange('leads:list', 0, -1) as string[];
    
    if (!leadIds || leadIds.length === 0) {
      return NextResponse.json({ leads: [] });
    }

    // Fetch all lead data
    const leads = await Promise.all(
      leadIds.map(async (id) => {
        const leadData = await kv.get(id);
        return leadData ? { id, ...leadData as object } : null;
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
    
    // If KV is not configured, return empty array
    if (error instanceof Error && error.message.includes('KV')) {
      return NextResponse.json({ 
        leads: [],
        message: 'KV database not configured yet. Set up Vercel KV to store leads.'
      });
    }
    
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

