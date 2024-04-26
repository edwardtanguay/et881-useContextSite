import { useContext } from "react"
import { AppContext } from "../AppContext"

export const PageAbout = () => {
	const { handleChangeAppTitle } = useContext(AppContext);

	return (
		<>
		<p>This is the about page.</p>
		<button className="bg-slate-300 rounded px-2 py-1 mt-3" onClick={handleChangeAppTitle}>Change title</button>
		</>
	)
}
