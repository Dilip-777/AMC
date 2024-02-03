"use client";
import { trpc } from "@/app/_trpc/client";

export default function Test() {
  const getTodos = trpc.getTodos.useQuery();
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => {
      getTodos.refetch();
    },
  });
  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() => {
          addTodo.mutate({ title: "Hello" });
        }}
      >
        submit
      </button>
      {process.env.NODE_ENV.length || "no DATABASE_URL"}
      <pre>{JSON.stringify(getTodos.data, null, 2)}</pre>
    </div>
  );
}
