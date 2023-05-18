import { z } from 'zod'
import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
} from '@/server/api/trpc'
import { TRPCError } from '@trpc/server'

// import { Itinerary } from '@prisma/client'

export const itineraryRouter = createTRPCRouter({
    getById: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const itinerary = await ctx.prisma.itinerary.findUnique({
                where: { id: input.id },
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

        return itinerary
    }),
})
