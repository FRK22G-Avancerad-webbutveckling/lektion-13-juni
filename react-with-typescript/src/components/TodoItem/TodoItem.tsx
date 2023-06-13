interface TodoItemProps {
    todo: string,
    completed: boolean
}

function TodoItem(props: TodoItemProps) {
    const { todo, completed } = props;

    return (
        <li>{ todo } - { completed }</li>
    )
}

export default TodoItem;