import { TasksCard } from "../types/types";

export const TaskCard = ({ task, deleteATask }: TasksCard) => {
	return (
		<>
			<div className="card card-body bg-secondary rounded-0">
				{<h2>{task.title}</h2>}
				<p>{task.id}</p>
				<p>{task.description}</p>
				<button className="btn btn-success mb-2 text-dark">Update</button>

				<button
					className="btn btn-primary"
					onClick={() => task.id && deleteATask(task.id)}
				>
					Delete
				</button>
			</div>
		</>
	);
};
