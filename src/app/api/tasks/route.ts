import { NextResponse } from "next/server";
import { db } from "@/db";
import { tasks } from "@/db/schema";
import { createTaskSchema } from "./validators";
import { desc } from "drizzle-orm";

export async function GET() {
  const all = await db.select().from(tasks).orderBy(desc(tasks.createdAt));
  return NextResponse.json(all);
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = createTaskSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    );
  }
  const [task] = await db.insert(tasks).values(parsed.data).returning();
  return NextResponse.json(task, { status: 201 });
}
