type TodoItemProps = {
    id: String
    title: String
    complete:Boolean

}

export default function TodoItem({ id, title, complete}: TodoItemProps) {
    return (
        <li className="flex gap-1 items-center">
            <input  id="id" type="checkbox" className="cursor-pointer peer"  />
            <label htmlFor="id" className="peer-checked:line-through">{title}</label>
        </li>
    )
} 