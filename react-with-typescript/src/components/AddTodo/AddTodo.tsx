import { useState } from "react";

interface AddTodoProps {
    updateTodo: (text: string) => void
}

function AddTodo(props: AddTodoProps) {
    const [todoText, setTodoText] = useState('');

    return (
        <section>
            <input type="text" onChange={ (event) => { setTodoText(event.target.value) } } />
            <button onClick={ () => { props.updateTodo(todoText) } }>Lägg till todo</button>
        </section>
    )
}

export default AddTodo;