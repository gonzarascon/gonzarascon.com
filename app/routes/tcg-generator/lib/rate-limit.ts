import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const upstashRedisRestUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashRedisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!upstashRedisRestUrl || !upstashRedisRestToken) {
	throw new Error("Missing Upstash Redis REST URL or token");
}

// Initialize Redis client
const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL,
	token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

// Create a rate limiter instance
const ratelimit = new Ratelimit({
	redis: redis,
	limiter: Ratelimit.slidingWindow(5, "86400 s"), // 5 requests per 24 hours
});

export async function rateLimit(identifier: string, uniqueId: string | null) {
	const { success, limit, remaining } = await ratelimit.limit(
		`${identifier} ${uniqueId ? `-${uniqueId}` : null}`,
	);

	return {
		success,
		limit,
		remaining,
	};
}
