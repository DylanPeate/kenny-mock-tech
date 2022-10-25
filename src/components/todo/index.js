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
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    const changeFilter = (value) => {
        setFilter({ filter: value })
        console.log(filter.filter, 'filter value')
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

                    return <li key={todo.id}>

                        <SingleTodo todo={todo} filter={filter.filter} />

                    </li>
                })}
            </ul>

        </>
        // <p>Hello</p>
    )
}

export default Todo