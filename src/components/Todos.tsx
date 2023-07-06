import {useTodos} from "../store/todos";
import {useSearchParams} from "react-router-dom";

const Todos = () => {
    const {todos, toggleTodosCompleted, handleDelete} = useTodos();


    const [searchParams] = useSearchParams();
    const todosData = searchParams.get('todos');
    let filterData = todos;
    if (todosData === 'active') {
        filterData = filterData.filter((task) => !task.completed);
    }
    if (todosData === 'completed') {
        filterData = filterData.filter((task) => task.completed);
    }
    console.log(filterData)
    return (<div>
        <ul>
            {filterData.map((d) => {
                return <li key={d.id}>
                    <input type="checkbox"
                           id={`todo-${d.id}`}
                           checked={d.completed}
                           onChange={() => toggleTodosCompleted(d.id)}
                    />
                    <label htmlFor={`todo-${d.id}`}>{d.task}</label>
                    {d.completed && (<button type='button' onClick={() => handleDelete(d.id)}>
                            Delete
                        </button>)}
                </li>
            })}
        </ul>
    </div>);
};

export default Todos;