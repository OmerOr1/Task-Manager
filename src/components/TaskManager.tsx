import React, { useState } from "react";
import { Task } from "../types";
import TaskList from "./TaskList.tsx";
import Pagination from "./Pagination.tsx";
import GuideLines from "./GuideLines.tsx";
import DeleteAllTasks from "./DeleteAllTasks.tsx";
import '../styles/TaskManager.css';
import AddTaskForm from "./AddTaskForm.tsx";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [deleteAllVisible, setDeleteAllVisible] = useState<boolean>(false);

  const maxTasksPerPage = 10;
  const maxPage = Math.max(1, Math.ceil(tasks.length / maxTasksPerPage));

  if (currentPage > maxPage) {
    setCurrentPage(maxPage);
  }

  const editTask = (id: number, newName: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, name: newName } : task)));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  
  function goDown(id: number): void {
    const index = tasks.findIndex((task) => task.id === id);
    
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  
  function goUp(id: number): void {
    const index = tasks.findIndex((task) => task.id === id);
    
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  const handlePageChange = (direction: "prev" | "next") => {
    setCurrentPage((prev) =>
      direction === "prev" ? Math.max(prev - 1, 1) : Math.min(prev + 1, maxPage)
    );
  };

  const handleDeleteAll = () => {
    setTasks([]);
    setDeleteAllVisible(false);
    setCurrentPage(1);
  };

  const paginatedTasks = tasks.slice(
    (currentPage - 1) * maxTasksPerPage,
    currentPage * maxTasksPerPage
  );

  return (
    <div id="taskMansger">
      <AddTaskForm
        tasks={tasks}
        setTasks={setTasks} 
      />

      <TaskList 
        tasks={paginatedTasks}
        onEdit={editTask}
        onDelete={deleteTask}
        onDown={goDown}
        onUp={goUp}
      />

      <Pagination
        isFlatEdges={deleteAllVisible}
        currentPage={currentPage}
        maxPage={maxPage}
        onPrevious={() => handlePageChange("prev")}
        onNext={() => handlePageChange("next")}
      />

      <DeleteAllTasks
        visible={deleteAllVisible}
        onConfirm={handleDeleteAll}
        onClick={() => setDeleteAllVisible(true)}
        onCancel={() => setDeleteAllVisible(false)}
      />

      <GuideLines />
    </div>
  );
};

export default TaskManager;