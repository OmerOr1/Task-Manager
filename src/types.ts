export interface Task {
    id: number;
    name: string;
}

export interface AddTaskFormProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface PaginationProps {
    isFlatEdges: boolean;
    currentPage: number;
    maxPage: number;
    onPrevious: () => void;
    onNext: () => void;
}
  
export interface TaskItemProps {
    task: Task;
    onEdit: (id: number, newName: string) => void;
    onDelete: (id: number) => void;
    onDown:  (id: number) => void;
    onUp:  (id: number) => void;
}
  
export interface TaskListProps {
    tasks: Task[];
    onEdit: (id: number, newName: string) => void;
    onDelete: (id: number) => void;
    onDown:  (id: number) => void;
    onUp:  (id: number) => void;
}
  
export interface DeleteAllTasksProps {
    visible: boolean;
    onConfirm: () => void;
    onClick: () => void;
    onCancel: () => void;
}  