import { useState } from "react";
import "./App.css";
// import { SearchSection, ClientDetails } from "./components";
import { Routes, Route } from "react-router-dom";
import { ViewDataPage, AddView } from "./Pages";
import { EditView } from "./components";

function App() {
	// const [isInforCardCliked, setisInforCardCliked] = useState(false);
	const [clientCardSelected, setclientCardSelected] = useState(5);

	return (
		<main className="w-full max-w-2xl">
			<Routes>
				<Route index element={<ViewDataPage clientCardSelected={clientCardSelected} setclientCardSelected={setclientCardSelected} />} />
				<Route path="/add" element={<AddView />} />
				<Route path="/edit" element={<EditView id={clientCardSelected} />} />
			</Routes>
			{/* {!isInforCardCliked ? (
				<SearchSection
					setisInforCardCliked={setisInforCardCliked}
					setclientCardSelected={setclientCardSelected}
				/>
			) : (
				<ClientDetails setisInforCardCliked={setisInforCardCliked} id={clientCardSelected} />
			)} */}
		</main>
	);
}

export default App;
