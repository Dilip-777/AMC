import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { eq } from "drizzle-orm";
import { customers, custtype } from "@/db/schema";

export const customerRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(3).max(20),
        code: z.string(),
        company: z.string(),
        email: z.string().email(),
        mobile: z.string().min(10).max(10),
        type: z.string(),
        address: z.string(),
        city: z.string(),
        state: z.string(),
        zip: z.string(),
        zone: z.string(),
        status: z.enum(["Active", "Inactive"]),
        note: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(customers).values({
        name: input.name,
        code: input.code,
        company: input.company,
        email: input.email,
        mobile: input.mobile,
        type: input.type,
        address: input.address,
        city: input.city,
        state: input.state,
        zip: input.zip,
        zone: input.zone,
        status: input.status,
        note: input.note,
      });

      //   const workspace = await ctx.db.insert(custtype).values({
      //   });
      //   return workspace;
    }),
});
