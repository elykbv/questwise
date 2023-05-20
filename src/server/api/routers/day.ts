import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
import { TRPCError } from '@trpc/server'

export const dayRouter = createTRPCRouter({
    getAllByItineraryId: protectedProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            const days = await ctx.prisma.day.findMany({
                where: {
                    itineraryId: input.id,
                },
                include: {
                    activities: true,
                },
            })

            if (!days || days.length < 1)
                throw new TRPCError({
                    message: 'No data found',
                    code: 'NOT_FOUND',
                })

            return days
        }),
})
