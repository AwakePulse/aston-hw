import React from 'react';
import {Todo} from "../Todos.types.ts";
import styles from '../TodosCard.module.css';

const TodoCard: React.FC = ({todo}: {todo: Todo}) => {
    return (
        <div className={`${styles.todo_content} ${todo.completed ? styles.checked : ''}`}>
            <label className={styles.todo_label}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    readOnly
                />
                <span>{todo.title}</span>
            </label>
        </div>
    );
};

export default TodoCard;