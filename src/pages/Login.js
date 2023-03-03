import axios from "axios"
import { useState, useContext } from "react"
import { TokenContext } from "../components/TokenProvider"
import { useNavigate } from "react-router-dom"

export default function Login() {
	const [isLoading, setIsLoading] = useState(false)
	const { setToken } = useContext(TokenContext)
	const navigate = useNavigate()

	async function handleSubmit(event) {
		event.preventDefault()
		setIsLoading(true)

		try {
			const response = await axios.post("http://localhost:4000/auth/token", {
				username: event.target.username.value,
				password: event.target.password.value
			})

			if (response.status === 200) {
				setToken(response.data)
				navigate("/s/profile")
			}
		} catch (error) {
			
		} finally {
			setIsLoading(false)
		}
	}
	
	return (
		<>
			<h1>Log in</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Username
					<input type="text" name="username" />
				</label>
				<label>
					Password
					<input type="password" name="password" />
				</label>
				<button type="submit">Log in</button>
				{isLoading && <p>Loading...</p>}
			</form>
		</>
	)
}