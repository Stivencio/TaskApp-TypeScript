import logo from "../img/logo.svg";
import { Title } from "../types/types";

export const Navbar = ({ title }: Title) => {
	return (
		<>
			<nav className="navbar absnavbar-dark bg-primary">
				<div className="container">
					<a href="/" className="navbar-brand">
						<img src={logo} alt="logo" style={{ width: "4rem" }} />

						{title && <h1>{title}</h1>}
					</a>
				</div>
			</nav>
		</>
	);
};
