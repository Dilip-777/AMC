import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export const userService = {
  authenticate,
};

async function authenticate(name: string, password: string) {
  const user = await db.select().from(users).where(eq(users.name, name));

  if (user.length === 0) {
    return null;
  }

  const isPasswordMatch = await bcrypt.compare(password, user[0].password);

  if (isPasswordMatch) {
    return user[0];
  }
}
