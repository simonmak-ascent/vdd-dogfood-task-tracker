import { db } from "@/db";
import { tasks } from "@/db/schema";
import { desc } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Home() {
  const all = await db.select().from(tasks).orderBy(desc(tasks.createdAt));

  return (
    <main className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>

      <form
        action={async (formData: FormData) => {
          "use server";
          const title = formData.get("title") as string;
          if (title && title.length <= 200) {
            await db.insert(tasks).values({ title });
          }
          revalidatePath("/");
          redirect("/");
        }}
        className="flex gap-2 mb-4"
      >
        <input
          name="title"
          placeholder="Add a task..."
          className="flex-1 border rounded px-3 py-2"
          maxLength={200}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {all.map((task) => (
          <li
            key={task.id}
            className={`p-3 border rounded flex items-center justify-between ${
              task.status === "completed" ? "opacity-50 line-through" : ""
            }`}
          >
            <span>{task.title}</span>
            <div className="flex gap-2">
              <form
                action={async () => {
                  "use server";
                  const next =
                    task.status === "completed" ? "pending" : "completed";
                  await db
                    .update(tasks)
                    .set({ status: next, updatedAt: new Date() })
                    .where(
                      // Simple where with eq
                      {
                        extra: undefined,
                      } as any
                    );
                  revalidatePath("/");
                  redirect("/");
                }}
              >
                <button className="text-sm text-gray-600 hover:text-green-600">
                  {task.status === "completed" ? "↩" : "✓"}
                </button>
              </form>
              <form
                action={async () => {
                  "use server";
                  revalidatePath("/");
                  redirect("/");
                }}
              >
                <button className="text-sm text-gray-600 hover:text-red-600">
                  ✕
                </button>
              </form>
            </div>
          </li>
        ))}
      </ul>

      {all.length === 0 && (
        <p className="text-gray-500 text-center py-8">
          No tasks yet. Add one above.
        </p>
      )}
    </main>
  );
}
