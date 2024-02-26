import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { eq } from "drizzle-orm";
import { custtype } from "@/db/schema";

export const customertyperouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        status: z.enum(["Inactive", "Active"]),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const isExist = await ctx.db
        .select()
        .from(custtype)
        .where(eq(custtype.name, input.name));
      if (isExist.length > 0) {
        return {
          usernameError: "Username already exist",
        };
      }
      //   const user = await ctx.db.insert(custtype).values({
      //     name: input.name,
      //     status: input.status,
      //   });

      await ctx.db.insert(custtype).values({
        name: input.name,
        status: input.status,
      });

      return { usernameError: null };

      //   const workspace = await ctx.db.insert(custtype).values({
      //   });
      //   return workspace;
    }),
});
