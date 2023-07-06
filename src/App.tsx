import AddTodo from "./components/addTodo";
import Todos from "./components/Todos";
import Navbar from "./components/Navbar";

const App = () => {
    return (<main>
            <h1>Todo react</h1>
            <Navbar/>
            <AddTodo/>
            <Todos/>

        </main>);
};

export default App;