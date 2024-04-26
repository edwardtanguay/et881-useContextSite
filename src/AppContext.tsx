import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { ISkill } from "./types";

interface IAppContext {
	appTitle: string;
	handleChangeAppTitle: () => void;
	skills: ISkill[];
	handleDeleteSkill: () => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

const skillsUrl = "https://edwardtanguay.vercel.app/share/skills.json";
const _appTitle = "Showcase for React useContext";

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appTitle, setAppTitle] = useState(_appTitle);
	const [skills, setSkills] = useState<ISkill[]>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get(skillsUrl);
			const _skills = response.data;
			setSkills(_skills);
		})();
	}, []);

	const handleChangeAppTitle = () => {
		setAppTitle(appTitle + ">");
	};

	const handleDeleteSkill = () => {
		console.log('deleting skill');
	} 

	return (
		<AppContext.Provider
			value={{
				appTitle,
				handleChangeAppTitle,
				skills,
				handleDeleteSkill
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
