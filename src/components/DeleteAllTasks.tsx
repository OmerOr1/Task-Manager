import React from "react";
import { DeleteAllTasksProps } from "../types.ts";
import '../styles/DeleteAllTasksProps.css';

const DeleteAllTasks: React.FC<DeleteAllTasksProps> = ({ visible, onConfirm, onClick, onCancel }) => {
  if (!visible) {
    return <button id="deleteButton" onClick={onClick}>Delete all tasks</button>;
  }

  return (
    <div id="deleteAllConfirmation">
      <p>Are you sure you want to delete all tasks?</p>
      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default DeleteAllTasks;