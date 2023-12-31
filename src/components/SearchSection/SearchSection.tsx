import Search from "./Search/Search";
import { useState } from "react";
import { useFilterClientData } from "../../api/";
import { Link } from "react-router-dom";
import { Plus } from "../Icons";
import Listbox from "./Select/ListBox";
import ClientCard from "./ClientCard/ClientCard";

interface SearchSectionProps {
	setisInforCardCliked: (newValue: boolean) => void;
	setclientCardSelected: (newValue: number) => void;
}

const SearchSection = (props: SearchSectionProps) => {
	const [toSearch, setToSearch] = useState("");
	const [perfil, setPerfil] = useState("");

	const { filteredClientData } = useFilterClientData(toSearch, perfil);

	return (
		<article className="flex flex-col gap-3">
			<div className="flex flex-row justify-between gap-2">
				<Search setToSearch={setToSearch} />
				<Link
					className="flex justify-center items-center w-24 bg-blue-500 rounded-md hover:bg-blue-400"
					to="/add"
				>
					<Plus width={28} height={28} strokeWidth={2} />
				</Link>
			</div>

			<Listbox perfil={perfil} setPerfil={setPerfil} />

			<section className="flex w-full max-h-96 flex-col gap-3 overflow-auto">
				{filteredClientData ? (
					filteredClientData.map((client) => (
						<ClientCard
							key={client.clientId}
							id={client.clientId}
							name={client.clientName}
							email={client.clientEmail}
							setisInforCardCliked={props.setisInforCardCliked}
							setclientCardSelected={props.setclientCardSelected}
						/>
					))
				) : (
					<span>No hay datos</span>
				)}
			</section>
		</article>
	);
};

export default SearchSection;
