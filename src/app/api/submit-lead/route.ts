import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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

    // Store in Vercel KV
    const timestamp = new Date().toISOString();
    const leadId = `lead:${Date.now()}:${email}`;
    
    const leadData = {
      name,
      email,
      timestamp,
      source: 'landing-page',
      status: 'new'
    };

    // Store the lead data
    await kv.set(leadId, leadData);
    
    // Also add to a list for easy retrieval (optional)
    await kv.lpush('leads:list', leadId);

    // Set expiration (optional - keeps data for 1 year)
    await kv.expire(leadId, 31536000); // 1 year in seconds

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll send you the agreement shortly.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting lead:', error);
    
    // If KV is not configured, still return success (graceful degradation)
    if (error instanceof Error && error.message.includes('KV')) {
      console.log('KV not configured yet - storing in logs:', { name: body?.name, email: body?.email });
    }
    
    return NextResponse.json(
      { error: 'Failed to submit. Please try again.' },
      { status: 500 }
    );
  }
}

