import { type Context } from "./context";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
// export async function createContext(opts: CreateNextContextOptions) {
//   const session = await getSession({ req: opts.req });

//   return {
//     session,
//     db,
//   };
// }

// export type Context = Awaited<ReturnType<typeof createContext>>;

import { initTRPC } from "@trpc/server";

const t = initTRPC.context<Context>().create();

export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure;
