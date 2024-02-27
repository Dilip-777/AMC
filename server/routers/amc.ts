import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { amc, services } from "@/db/schema";

export const amcRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        code: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        invoiceDate: z.string(),
        customerCode: z.string(),
        customerId: z.number(),
        services: z.array(
          z.object({
            serviceDate: z.string(),
            note: z.string().optional(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      console.log("input:", input);

      const a = await ctx.db
        .insert(amc)
        .values({
          code: input.code,
          startDate: new Date(input.startDate),
          endDate: new Date(input.endDate),
          invoiceDate: new Date(input.invoiceDate),
          customerCode: input.customerCode,
          customerId: input.customerId,
        })
        .returning({ id: amc.id });

      await ctx.db.insert(services).values(
        input.services.map((service) => ({
          amcId: a[0].id,
          serviceDate: new Date(service.serviceDate),
          note: service.note,
        }))
      );

      return { message: "AMC created successfully" };

      // await ctx.db.insert(services).values({
      //    amcId: 1,

      // })

      //   const workspace = await ctx.db.insert(custtype).values({
      //   });
      //   return workspace;
    }),
});
