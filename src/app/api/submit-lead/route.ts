import { NextRequest, NextResponse } from 'next/server';
import { getRedisClient } from '@/lib/redis';

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string } = {};
  
  try {
    body = await request.json();
    const { name, email } = body;

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Store in Redis
    const timestamp = new Date().toISOString();
    const leadId = `lead:${Date.now()}:${email}`;
    
    const leadData = {
      name,
      email,
      timestamp,
      source: 'landing-page',
      status: 'new'
    };

    // Get Redis client
    const redis = await getRedisClient();
    
    // Store the lead data (Redis needs JSON stringified)
    await redis.set(leadId, JSON.stringify(leadData));
    
    // Also add to a list for easy retrieval
    await redis.lPush('leads:list', leadId);

    // Set expiration (keeps data for 1 year)
    await redis.expire(leadId, 31536000);

    // Optional: Send Discord/Slack webhook notification
    if (process.env.DISCORD_WEBHOOK_URL) {
      try {
        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🎯 **New Lead!**\n**Name:** ${name}\n**Email:** ${email}\n**Time:** ${new Date().toLocaleString()}`
          })
        });
      } catch (webhookError) {
        console.error('Webhook notification failed:', webhookError);
      }
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll send you the agreement shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // If Redis is not configured, log and still return success
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    if (errorMessage.includes('REDIS') || errorMessage.includes('Connection') || errorMessage.includes('ENV')) {
      console.log('Redis not configured - lead data:', { name: body?.name, email: body?.email, timestamp: new Date().toISOString() });
      // Still return success so user experience isn't broken
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you! We\'ll send you the agreement shortly.' 
        },
        { status: 200 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}

