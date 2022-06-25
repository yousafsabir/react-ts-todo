import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import "./TodoWrap.css";

type Props = {
    id: number;
    todo: string;
    isDone: boolean;
};

const TodoWrap: React.FC<Props> = ({ id, todo, isDone }) => {
    return (
        <div className="todo-wrap">
            <div>{todo}</div>
            <div className="right">
                <BiEditAlt />
                <BiTrash />
                <MdDone />
            </div>
        </div>
    );
};

export default TodoWrap;
