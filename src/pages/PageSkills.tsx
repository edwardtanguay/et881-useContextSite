import { useContext } from "react"
import { AppContext } from "../AppContext"

export const PageSkills = () => {
	const { skills } = useContext(AppContext);

	return (
		<p>There are {skills.length} skills.</p>
	)
}
