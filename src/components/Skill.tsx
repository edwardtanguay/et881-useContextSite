import { ISkill } from "../types";

interface IProps {
	skill: ISkill;
}

export const Skill = ({ skill }: IProps) => {
	return <div>{skill.name}</div>;
};
