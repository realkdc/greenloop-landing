import { createClient } from 'redis';

let redis: ReturnType<typeof createClient> | null = null;

export async function getRedisClient() {
  if (!redis) {
    const redisUrl = process.env.REDIS_URL || process.env.KV_URL;
    
    if (!redisUrl) {
      throw new Error('REDIS_URL environment variable is not set');
    }
    
    redis = createClient({
      url: redisUrl,
    });
    
    redis.on('error', (err) => console.error('Redis Client Error', err));
    
    if (!redis.isOpen) {
      await redis.connect();
    }
  }
  
  return redis;
}

