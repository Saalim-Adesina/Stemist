import React, {useState} from 'react'

export const CreateNote = () => {
    const [value, setValue] = useState("")

    const handleSubmit= (e) => {
        e.preventDefault()
        setValue("")
        console.log(value)
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input onChange={(e) => setValue(e.target.value)} type="text" className='todo-input' placeholder='What is the task today?'/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
