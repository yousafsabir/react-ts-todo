import React, { useState } from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import "./TodoWrap.css";

type Props = {
    id: number;
    todo: string;
    isDone: boolean;
    delIt: (id: number) => void;
    doneIt: (id: number) => void;
    editIt: (id: number, todo: string) => void;
};

const TodoWrap: React.FC<Props> = ({
    id,
    todo,
    isDone,
    delIt,
    editIt,
    doneIt,
}) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>("");

    const styles = {
        containerEdit: {
            display: "flex",
        },
        containerTodo: {
            maxWidth: "100%",
            display: "flex",
            gap: "0.25rem",
            justifyContent: "space-between",
        },
        input: {
            display: "inline-block",
            flex: 1,
        },
        completed: {
            textDecoration: isDone ? "line-through" : "none",
            textDecorationColor: "red",
        },
    };

    return (
        <div
            className="todo-wrap"
            style={edit ? styles.containerEdit : styles.containerTodo}
        >
            {edit ? (
                <input
                    type="text"
                    className="wrap-input"
                    style={styles.input}
                    value={editTodo}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEditTodo(e.target.value)
                    }
                />
            ) : (
                <p className="todo" style={styles.completed}>
                    {todo}
                </p>
            )}
            {edit ? (
                <div className="right">
                    <MdDone
                        onClick={() => {
                            editIt(id, editTodo);
                            setEdit(false);
                        }}
                    />
                    <FcCancel onClick={() => setEdit(false)} />
                </div>
            ) : (
                <div className="right">
                    <BiEditAlt
                        onClick={() => {
                            setEdit(true);
                            setEditTodo(todo);
                        }}
                    />
                    <BiTrash onClick={() => delIt(id)} />
                    <MdDone
                        onClick={() => {
                            if (!isDone) {
                                doneIt(id);
                            }
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default TodoWrap;
