/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Skill } from "./types";
import * as tools from './tools';

interface IAppContext {
	appTitle: string;
	handleChangeAppTitle: () => void;
	skills: Skill[];
	handleDeleteSkill: (skill: Skill) => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

const skillsUrl = "https://edwardtanguay.vercel.app/share/skills.json";
const _appTitle = "Showcase for React useContext";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appTitle, setAppTitle] = useState(_appTitle);
	const [skills, setSkills] = useState<Skill[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(skillsUrl);
			const rawSkills:any[] = response.data;
			const _skills: Skill[] = [];
			for (const rawSkill of rawSkills) {
				const _skill: Skill = {
					name: rawSkill.name,
					description: rawSkill.description,
					idCode: rawSkill.idCode,
					url: rawSkill.url,
					cleanDescription: tools.sentencize(rawSkill.description)
				}
				_skills.push(_skill);
			}
			setSkills(_skills);
		})();
	}, []);

	const handleChangeAppTitle = () => {
		setAppTitle(appTitle + ">");
	};

	const handleDeleteSkill = (skill: Skill) => {
		const _skills = skills.filter(m => m.idCode !== skill.idCode);
		setSkills(structuredClone(_skills));
	};

	return (
		<AppContext.Provider
			value={{
				appTitle,
				handleChangeAppTitle,
				skills,
				handleDeleteSkill,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
