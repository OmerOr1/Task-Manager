import React, { useState, useRef } from "react";
import { TaskItemProps } from "../types.ts";

const TaskItem: React.FC<TaskItemProps> = ({ task, onEdit, onDelete, onDown, onUp }) => {
  const [isEditing, setIsEditing] = useState(false);
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleEdit = (e: React.FocusEvent<HTMLLabelElement>) => {
    const newName = e.target.innerText.trim();

    if (newName && newName.length <= 30 && newName !== task.name) {
      onEdit(task.id, newName);
    } else {
      e.target.innerText = task.name;
    }

    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    const currentLength = e.currentTarget.innerText.length;
    
    if (currentLength >= 30 && e.key !== "Backspace") {
      e.preventDefault();
    }

    if (e.key === "Enter") {
      e.preventDefault();
      e.currentTarget.blur();
    }
  };

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (labelRef.current) {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(labelRef.current);
        range.collapse(false);
        selection?.removeAllRanges();
        selection?.addRange(range);
        labelRef.current.focus();
      }
    }, 0);
  };

  return (
    <li>
      <label
        ref={labelRef}
        contentEditable={isEditing}
        suppressContentEditableWarning={true}
        onBlur={handleEdit}
        onKeyDown={handleKeyDown}
        spellCheck={false}
        tabIndex={-1}
      >
        {task.name}
      </label>
      <button onClick={enableEditing} style={{ marginLeft:"auto" }}>🖊</button>
      <button onClick={() => onDelete(task.id)}>❌</button>
      <button onClick={() => onDown(task.id)}>👇</button>
      <button onClick={() => onUp(task.id)}>👆</button>
    </li>
  );
};

export default TaskItem;