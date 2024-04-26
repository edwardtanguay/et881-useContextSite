import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Skill } from "../components/Skill";

export const PageSkills = () => {
	const { skills } = useContext(AppContext);

	return (
		<>
			<p>There are {skills.length} skills.</p>
			<section>
				{skills.map((skill) => {
					return <Skill />;
				})}
			</section>
		</>
	);
};
