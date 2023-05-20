import { createTRPCRouter } from '@/server/api/trpc'
import { itineraryRouter } from './routers/itinerary'
import { activityRouter } from './routers/activity'
import { dayRouter } from './routers/day'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    itineraries: itineraryRouter,
    activities: activityRouter,
    days: dayRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
