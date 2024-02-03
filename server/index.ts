import { db } from "@/db";
import { publicProcedure, router } from "./trpc";
import { todos } from "@/db/schema";
import { z } from "zod";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    try {
      const ts = await db.select().from(todos);
      console.log(ts);

      return ts;
    } catch (e) {
      console.log(e);
    }
    // return [
    //   { id: 1, title: "Buy milk", completed: false },
    //   { id: 2, title: "Buy eggs", completed: true },
    //   { id: 3, title: "Buy bread", completed: false },
    // ];
  }),
  addTodo: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async ({ input }) => {
      try {
        await db.insert(todos).values({ content: input.title, done: false });
        return false;
      } catch (e) {
        console.log(e);
        return false;
      }
    }),
});

export type AppRouter = typeof appRouter;
