import { useContext } from "react"
import { AppContext } from "../AppContext"

export const PageWelcome = () => {
	const { appTitle, skills } = useContext(AppContext);

	return (
		<p>Welcome to our site called {appTitle}, we currently have {skills.length} skills.</p>
	)
}