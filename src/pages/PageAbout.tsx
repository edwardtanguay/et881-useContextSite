import { useContext } from "react";
import { AppContext } from "../AppContext";

export const PageAbout = () => {
	const { handleChangeAppTitle, skills } = useContext(AppContext);

	return (
		<>
			<p>This is the about page.</p>
			<button
				className="bg-slate-300 rounded px-2 py-1 mt-3 mb-3"
				onClick={handleChangeAppTitle}
			>
				Change title
			</button>
			<p>Our next skill will be #{skills.length + 1}.</p>
		</>
	);
};
