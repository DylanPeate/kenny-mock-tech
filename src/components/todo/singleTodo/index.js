import React, { useState, useEffect } from "react";
import './singleTodo.css'

const SingleTodo = (props) => {

    let todo = props.todo
    let filter = props.filter
    const [status, setStatus] = useState(props.todo.completed)

    useEffect(() => {
        todo.completed = status
    }, [status, filter, todo])

    return (
        <>
            {filter === 'all' ?
                <>
                    <p>{todo.title}</p>
                    {status ? <p>Completed</p> : <p>Not Complete</p>}
                    <button onClick={() => {
                        let tmp = !todo.completed
                        setStatus(tmp)
                    }}>
                        Toggle
                    </button>
                </>
                : filter === status ?
                    <>
                        <p>{todo.title}</p>
                        {status ? <p>Completed</p> : <p>Not Complete</p>}
                        <button onClick={() => {
                            let tmp = !todo.completed
                            setStatus(tmp)
                        }}>
                            Toggle
                        </button>
                    </>
                    : null}
        </>
    )
}

export default SingleTodo
