import { createContext, useState } from "react";

interface IAppContext {
	appTitle: string;
	handleChangeAppTitle: () => void;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);
const _appTitle = "Showcase for React useContext";

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [appTitle, setAppTitle] = useState(_appTitle);

	const handleChangeAppTitle = () => {
		setAppTitle(appTitle + '>');
	};

	return (
		<AppContext.Provider
			value={{
				appTitle,
				handleChangeAppTitle
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
