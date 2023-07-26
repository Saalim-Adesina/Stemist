import { useState } from "react"
import { CreateNote } from "./CreateNote.js"

const Home = () => {
    const [todo, setTodo] = useState([])

    const addTodo = todo => {
        setTodo([...todo, ])
    }
    return (
        <CreateNote></CreateNote>
    )
}

export default Home