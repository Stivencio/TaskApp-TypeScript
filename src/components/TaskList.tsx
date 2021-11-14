import React from "react";
import { TaskCard } from "./TaskCard";
import { TasksList } from "../types/types";

export const TaskList = ({ task, deleteATask }: TasksList) => {
	return (
		<>
			{task.map((el) => (
				<div className="col-md-4 pb-2" key={el.id}>
					<TaskCard task={el} deleteATask={deleteATask} />
				</div>
			))}
		</>
	);
};
