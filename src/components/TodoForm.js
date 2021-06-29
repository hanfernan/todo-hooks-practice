import React, { useState, useEffect, useRef } from 'react'

function TodoForm(props) {
    //causes item to persist when you click edit. 
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
        //sets input on button click and clears out input box
        console.log(input)
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        placeholder="Add a todo"
                        value={input}
                        name="text"
                        className="todo-input edit"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button edit">Add todo</button>
                </>
            ) : (
                <>
                    <input
                        placeholder="Add a todo"
                        value={input}
                        name="text"
                        className="todo-input"
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className="todo-button">Add todo</button>
                </>)}

        </form>

    )
}

export default TodoForm
