import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenProvider";

export default function ProtectedLayout() {
	const { token } = useContext(TokenContext)
	const navigate = useNavigate()

	if (!token) {
		navigate("/login")
	}

	return (
		<>
			<header>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/profile">Profile</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}