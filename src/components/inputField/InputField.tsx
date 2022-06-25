import React, { useState } from "react";
import "./InputField.css";

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: () => void;
};

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    const todoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    };
    return (
        <form
            onSubmit={(e: React.FormEvent) => {
                e.preventDefault();
                handleAdd();
            }}
            className="form"
        >
            <input
                type="text"
                placeholder="Enter Task"
                className="form-input"
                value={todo}
                onChange={todoHandler}
            />
            <button type="submit" className="form-buttom">
                Go
            </button>
        </form>
    );
};

export default InputField;
