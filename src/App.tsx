import { apiTask } from "./data/tasks";
import { Navbar } from "./components/Navbar";
import { Task, Title } from "./types/types";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { useState } from "react";
import "./App.css";

export function App({ title }: Title) {
	const [tasks, setTasks] = useState<Task[]>(apiTask);

	const getCurrentDate = (): number => new Date().getTime();

	const addANewTask = (task: Task) =>
		setTasks([...tasks, { ...task, id: getCurrentDate(), completed: false }]);

	const deleteATask = (id: number) =>
		setTasks(tasks.filter((task) => task.id !== id));

	return (
		<div className="bg-dark text-white" style={{ height: "100vh" }}>
			{/* navbar */}
			<Navbar title={title} />
			{/* navbar */}

			<main className="container p-4">
				<div className="row">
					<div className="col-md-4">
						<TaskForm addANewTask={addANewTask} />
					</div>

					<div className="col-md-8">
						<div className="row">
							<TaskList task={tasks} deleteATask={deleteATask} />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
