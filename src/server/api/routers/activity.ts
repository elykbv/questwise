import { z } from 'zod'
import { createTRPCRouter, protectedProcedure } from '@/server/api/trpc'
// import { TRPCError } from '@trpc/server'

export const activityRouter = createTRPCRouter({
    create: protectedProcedure
        .input(z.object({ dayId: z.string() }))
        .mutation(async ({ ctx, input }) => {
            const activity = await ctx.prisma.activity.create({
                data: {
                    dayId: input.dayId,
                },
            })

            return activity
        }),
    getAllByDayId: protectedProcedure
        .input(z.object({ dayId: z.string() }))
        .query(async ({ ctx, input }) => {
            const activities = await ctx.prisma.activity.findMany({
                where: {
                    dayId: input.dayId,
                },
            })

            return activities
        }),

    deleteById: protectedProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx, input }) => {
            await ctx.prisma.activity.delete({
                where: {
                    id: input.id,
                },
            })
        }),
})
