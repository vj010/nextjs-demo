export default async function getToDo(toDoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${toDoId}`
  );

  if (!res.ok) throw new Error("failed to fetch to-do item");

  return res.json();
}
