import { NextRequest, NextResponse } from 'next/server';
import { getRedisClient } from '@/lib/redis';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    const resolvedParams = await Promise.resolve(params);
    const leadId = resolvedParams.id;
    
    if (!leadId) {
      return NextResponse.json(
        { error: 'Lead ID is required' },
        { status: 400 }
      );
    }

    const redis = await getRedisClient();
    
    // Delete the lead data
    await redis.del(leadId);
    
    // Remove from the leads list
    await redis.lRem('leads:list', 1, leadId);

    return NextResponse.json(
      { success: true, message: 'Lead deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting lead:', error);
    
    if (error instanceof Error && (error.message.includes('REDIS') || error.message.includes('Connection'))) {
      return NextResponse.json(
        { error: 'Redis database not connected. Connect the database in Vercel dashboard.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}

