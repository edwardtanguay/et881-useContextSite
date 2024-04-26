import { useContext } from "react";
import { Nav } from "./Nav";
import { AppContext } from "../AppContext";

export const Header = () => {
	const { appTitle } = useContext(AppContext);

	return (
		<>
			<h1 className="text-3xl mb-3 text-slate-800">{appTitle}</h1>
			<Nav/>
		</>
	);
};
