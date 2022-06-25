import { useState } from "react";
import "./App.css";
import InputField from "./components/inputField/InputField";
import TodoWrap from "./components/inputField/TodoWrap";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    interface Todos {
        id: number;
        todo: string;
        isDone: boolean;
    }
    const [todos, setTodos] = useState<Todos[]>([]);
    const handleAdd = () => {
        if (todo) {
            setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
            setTodo("");
            console.log(todos);
        }
    };
    const handleDel = (id: number): void => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const handleEdit = (id: number, todo: string): void => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return { ...item, todo };
                } else {
                    return item;
                }
            })
        );
    };
    const handleDone = (id: number) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    console.log("inside");

                    return { ...item, isDone: true };
                } else {
                    return item;
                }
            })
        );
    };
    return (
        <div className="App">
            <header className="App-header">
                <h2>Taskify</h2>
            </header>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <div className="card-grid">
                {todos.map((todo) => {
                    return (
                        <TodoWrap
                            key={todo.id}
                            {...todo}
                            delIt={handleDel}
                            editIt={handleEdit}
                            doneIt={handleDone}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default App;
