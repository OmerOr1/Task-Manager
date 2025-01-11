import React, { useState } from "react";
import { AddTaskFormProps } from "../types";
import "../styles/AddTaskForm.css"

const AddTaskForm: React.FC<AddTaskFormProps> = ({ tasks, setTasks }) => {
    const [taskName, setTaskName] = useState<string>("");
  
    const addTask = () => {
      if (taskName.trim() && taskName.length <= 30) {
        setTasks([...tasks, { id: Date.now(), name: taskName.trim() }]);
        setTaskName("");
      }
    };

  return (
    <div id="addTaskRow">
      <input
        type="text"
        placeholder="New task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button id="taskButton" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
};

export default AddTaskForm;