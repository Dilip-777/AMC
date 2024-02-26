import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";
import { db } from "@/db";

export const registerRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const hashedPassword = await bcrypt.hash(input.password, 10);
      const isExist = await ctx.db
        .select()
        .from(users)
        .where(eq(users.name, input.name));
      if (isExist.length > 0) {
        return {
          usernameError: "Username already exist",
        };
      }
      const user = await ctx.db.insert(users).values({
        name: input.name,
        email: input.email,
        password: hashedPassword,
        status: "1",
      });

      return { usernameError: null };

      //   const workspace = await ctx.db.insert(users).values({
      //   });
      //   return workspace;
    }),
});
