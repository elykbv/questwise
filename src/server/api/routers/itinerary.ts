import { z } from 'zod'
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from '@/server/api/trpc'
import { TRPCError } from '@trpc/server'
import { addDays } from 'date-fns'

// import { Itinerary } from '@prisma/client'

export const itineraryRouter = createTRPCRouter({
    getById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const itinerary = await ctx.prisma.itinerary.findUnique({
                where: { id: input.id },
                include: { days: true },
            })

            if (!itinerary) throw new TRPCError({ code: 'NOT_FOUND' })

            return itinerary
        }),
    create: protectedProcedure.mutation(async ({ ctx }) => {
        const userId = ctx.session.user.id
        const itinerary = await ctx.prisma.itinerary.create({
            data: {
                userId,
            },
        })

        const itineraryId = itinerary.id

        await ctx.prisma.day.createMany({
            data: [
                { itineraryId: itineraryId, date: new Date() },
                { itineraryId: itineraryId, date: addDays(new Date(), 1) },
                { itineraryId: itineraryId, date: addDays(new Date(), 2) },
                { itineraryId: itineraryId, date: addDays(new Date(), 3) },
            ],
        })

        return itinerary
    }),
})
