import React from "react";
import { TaskListProps } from "../types.ts";
import TaskItem from "./TaskItem.tsx";
import "../styles/TaskList.css";

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onDown, onUp }) => {
  return (
    <ol id="taskList">
      {tasks.map((task) => (
        <TaskItem
          key={task.id} 
          task={task} 
          onEdit={onEdit} 
          onDelete={onDelete} 
          onDown={onDown} 
          onUp={onUp} 
        />
      ))}
    </ol>
  );
};

export default TaskList;