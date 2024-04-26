import { createContext, useState } from "react";
import { Skill } from "./types";

interface IAppContext {
	appTitle: string;
	handleChangeAppTitle: () => void;
	skills: Skill[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const skillsUrl = 'https://edwardtanguay.vercel.app/share/skills.json';

export const AppContext = createContext<IAppContext>({} as IAppContext);
const _appTitle = "Showcase for React useContext";

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appTitle, setAppTitle] = useState(_appTitle);
	const [skills, setSkills] = useState<Skill[]>([]);

	const handleChangeAppTitle = () => {
		setAppTitle(appTitle + '>');
	};

	return (
		<AppContext.Provider
			value={{
				appTitle,
				handleChangeAppTitle,
				skills
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
