import Link from "next/link"
import getAllToDos from '@/lib/getAllToDos'


export default async   function ToDosPage() {
    const toDoData: Promise<Todo[]> = getAllToDos()

    const todos = await toDoData

    //console.log('Hello') // Did you find where this appears?

    const content = (
        <>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>             
            <br />
            <section>
                {todos.map(filteredTodos => {
                    return (
                        <>
                            <p key={filteredTodos.id}>
                                <Link href={`/todos/${filteredTodos.id}`}>{filteredTodos.title}</Link>
                            </p>
                            <br />
                        </>
                    )
                })}
            </section>
        </>
    )

    return content
}
