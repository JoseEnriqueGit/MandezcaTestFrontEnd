import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { DataView, AddView, EditView } from "./Pages";
// import { EditView } from "./components";

function App() {
	const [clientCardSelected, setclientCardSelected] = useState(5);

	return (
		<main className="w-full max-w-2xl">
			<Routes>
				<Route
					index
					element={
						<DataView
							clientCardSelected={clientCardSelected}
							setclientCardSelected={setclientCardSelected}
						/>
					}
				/>
				<Route path="/add" element={<AddView />} />
				<Route path="/edit" element={<EditView id={clientCardSelected} />} />
			</Routes>
		</main>
	);
}

export default App;
