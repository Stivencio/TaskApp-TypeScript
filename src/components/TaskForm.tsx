import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { AddNewTask } from "../types/types";

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
	title: "",
	description: "",
};

export const TaskForm = ({ addANewTask }: AddNewTask) => {
	const [task, setTask] = useState(initialState);
	const inputTitle = useRef<HTMLInputElement>(null);

	const handleInputChange = ({
		target: { name, value },
	}: HandleInputChange) => {
		setTask({ ...task, [name]: value });
	};

	const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addANewTask(task);
		setTask(initialState);
		inputTitle.current?.focus();
	};

	return (
		<div className="card card-body bg-secondary text-dark">
			<h1>Add Task</h1>

			<form onSubmit={handleNewTask}>
				<input
					type="text"
					placeholder="Write a title"
					name="title"
					className="form-control mb-3 rounded-0 shadow-none border-0"
					onChange={handleInputChange}
					value={task.title}
					autoFocus
					ref={inputTitle}
				/>

				<textarea
					name="description"
					rows={2}
					placeholder="Write a description"
					className="form-control mb-3 shadow-none border-0"
					onChange={handleInputChange}
					value={task.description}
				></textarea>

				<button className="btn btn-info">
					Save <FaPlusCircle />
				</button>
			</form>
		</div>
	);
};
