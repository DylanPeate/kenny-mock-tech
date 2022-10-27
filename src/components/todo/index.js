import React, { useState, useEffect } from "react";
import SingleTodo from "./singleTodo";
import './todo.css'

const Todo = () => {

    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState({ filter: 'all' })
    //https://jsonplaceholder.typicode.com/todos

    useEffect(() => {
        // async function fetchTodos() {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        //     const data = await response.json()
        //     console.log(data, "<== Data")
        //     return data
        // }

        const fetchTodos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setTodos(data)
        }

        fetchTodos()

        // fetch('https://jsonplaceholder.typicode.com/todos')
        //     .then(response => response.json())
        //     .then(json => setTodos(json))
    }, [])

    const changeFilter = (value) => {
        setFilter({ filter: value })
    }

    return (
        <>
            <div>
                <button onClick={() => (changeFilter('all'))}>
                    All
                </button>
                <button onClick={() => (changeFilter(true))}>
                    Completed
                </button>
                <button onClick={() => (changeFilter(false))}>
                    Not Completed
                </button>
            </div>
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id} className={todo.completed ? 'complete' : 'notComplete'}>
                        <SingleTodo todo={todo} filter={filter.filter} />
                    </li>
                })}
            </ul>
        </>
    )
}

export default Todo
