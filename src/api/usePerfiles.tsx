import { useQuery } from "react-query";
import axios from "axios";

type Profile = {
	perfilTitle: string;
};

const fetchPerfiles = async () => {
	const response = await axios.get(
		"https://localhost:7160/url/mnt/GetFullData/all-data"
	);
	const data = response.data;

	// Create a Set with explicit type annotation for the perfilTitle
	const uniquePerfilesSet: Set<string> = new Set(
		data.map((item: any) => item.perfilTitle)
	);

	const uniquePerfiles: Profile[] = Array.from(
		uniquePerfilesSet,
		(perfilTitle) => ({
			perfilTitle,
		})
	);

	// Add "Sin filtro" as the first element in the array of perfiles
	return [{ perfilTitle: "Sin filtro" }, ...uniquePerfiles];
};

const usePerfiles = () => {
	const { data } = useQuery("perfiles", fetchPerfiles);

	return data || [];
};

export default usePerfiles;
