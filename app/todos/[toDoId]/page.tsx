import getToDo from "@/lib/getToDo"

type Params = {
    params: {
        toDoId: string
    }
}

export default async function ToDo({ params: { toDoId } }: Params) {
    const toDoData: Promise<Todo> = getToDo(toDoId)   
    const toDo = await toDoData

    return (
        <>
            <h2>{toDo.title}</h2>
            <br />
            <p>userId: {toDo.userId}</p>
            <p>completed: {toDo.completed ? 'Yes' :'No'}</p>               
                

        </>
    )
}
