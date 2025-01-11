import React, { useState } from "react";
import '../styles/Guidelines.css';

const GuideLines: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev)
  }

  return (
    <>
      <button id="guideLinesButton" onClick={toggleVisibility}>guide lines</button>
      <div style={{ display: isVisible ?  "block" : "none" }}>
        <p>Add a new task by pressing <kbd>Enter</kbd> or clicking the button.</p>
        <p>A task name should not be empty.</p>
        <p>A task name should not exceed 30 characters.</p>
        <p>You can move tasks up and down.</p>
        <p>You can delete or edit a task.</p>
        <p>You can delete all tasks using the delete button.</p>
        <p>Each page contains up to 10 tasks.</p>
        <p>Switch pages using the navigation buttons below.</p>
      </div>
    </>
  );
};

export default GuideLines;