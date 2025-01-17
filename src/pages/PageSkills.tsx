import { useContext } from "react";
import { AppContext } from "../AppContext";
import { SingleSkill } from "../components/SingleSkill";

export const PageSkills = () => {
	const { skills } = useContext(AppContext);

	return (
		<>
			<p className="mb-3 text-xl">There are {skills.length} skills.</p>
			<section className="flex flex-wrap gap-3">
				{skills.map(skill => {
					return <SingleSkill skill={skill} key={skill.idCode} />;
				})}
			</section>
		</>
	);
};
