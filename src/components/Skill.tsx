import { useContext } from "react";
import { AppContext } from "../AppContext";
import { ISkill } from "../types";
import { FaRegTrashCan } from "react-icons/fa6";

interface IProps {
	skill: ISkill;
}

export const Skill = ({ skill }: IProps) => {
	const {handleDeleteSkill} = useContext(AppContext);

	return <div className="bg-slate-600 w-[20rem] p-3 rounded">
		<div className="text-xl text-orange-400 flex justify-between">{skill.name}
		<FaRegTrashCan onClick={() => handleDeleteSkill(skill)} className="text-red-500 mt-2 text-[1rem] cursor-pointer" />
		</div>
		<div className="text-slate-300 italic">{skill.description}</div>
	</div>;
};
