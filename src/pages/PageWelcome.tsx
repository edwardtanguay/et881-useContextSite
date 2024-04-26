import { useContext } from "react"
import { AppContext } from "../AppContext"

export const PageWelcome = () => {
	const { appTitle } = useContext(AppContext);

	return (
		<p>Welcome to our site called {appTitle}.</p>
	)
}