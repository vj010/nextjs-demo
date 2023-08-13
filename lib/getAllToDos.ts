export default async function getAllToDos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
