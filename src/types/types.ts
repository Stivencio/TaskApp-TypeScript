export interface Title {
	title?: string;
}

export interface Task {
	id?: number;
	title: string;
	description: string;
	completed?: boolean;
}

export interface TasksCard {
	task: Task;
	deleteATask: (id: number) => void;
}

export interface TasksList {
	task: Task[];
	deleteATask: (id: number) => void;
}

export interface AddNewTask {
	addANewTask: (task: Task) => void;
}
