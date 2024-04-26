import { ISkill } from "../types";

interface IProps {
	skill: ISkill;
}

export const Skill = ({ skill }: IProps) => {
	return <div className="bg-slate-600 w-[20rem] p-3 rounded">
		<div className="text-xl text-orange-400">{skill.name}</div>
		<div className="text-slate-300 italic">{skill.description}</div>
	</div>;
};
