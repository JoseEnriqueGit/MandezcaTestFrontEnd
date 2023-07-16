import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Fuse from "fuse.js";

interface ClientData {
	clientId: number;
	clientName: string;
	clientEmail: string;
	clientPhone: string;
	perfilId: number;
	perfilTitle: string;
	perfilDescription: string;
	addressId: number;
	addressLine: string;
	city: string;
	state: string;
	country: string;
	postalCode: string;
}

const options = {
	threshold: 0.2,
	keys: ["clientId", "clientName", "clientEmail"],
};

const useFilterClientData = (toSearch: string, selectedPerfil: string) => {
	const [filteredClientData, setFilteredClientData] = useState<ClientData[]>(
		[]
	);

	const { data } = useQuery(
		"clientData",
		async () => {
			const response = await axios.get<ClientData[]>(
				"https://localhost:7160/url/mnt/Client/all-data"
			);
			return response.data;
		},
		{
			refetchInterval: 100,
		}
	);

	useEffect(() => {
		if (data) {
			const fuse = new Fuse(data, options);
			const filteredByName = toSearch
				? fuse.search(toSearch).map((result) => result.item)
				: data;
			const filteredByPerfil =
				selectedPerfil !== "Sin filtro"
					? filteredByName.filter((client) =>
							client.perfilTitle
								.toLowerCase()
								.includes(selectedPerfil.toLowerCase())
					  )
					: filteredByName;
			setFilteredClientData(filteredByPerfil);
		}
	}, [toSearch, selectedPerfil, data]);

	return { filteredClientData };
};

export default useFilterClientData;
