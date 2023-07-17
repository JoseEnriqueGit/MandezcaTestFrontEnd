import axios from "axios";
import { Edit, Trash } from "../../Icons";
import { useQueryClient } from "react-query";
import { Link } from "react-router-dom";

interface ClientCardProps {
	id: number;
	name: string;
	email: string;
	setisInforCardCliked: (newValue: boolean) => void;
	setclientCardSelected: (newValue: number) => void;
	// seteditCliked: (newValue: boolean) => void;
}

const handleDelete = async (id: number) => {
	try {
		await axios.delete(`https://localhost:7160/url/mnt/DeleteFullData/${id}`);
	} catch (error) {
		console.error("Error deleting client:", error);
	}
};


const ClientCard = (props: ClientCardProps) => {
	const queryClient = useQueryClient();
	const handleClick = () => {
		props.setisInforCardCliked(true);
		props.setclientCardSelected(props.id);
	};

	const handleDeleteClick = () => {
		handleDelete(props.id);
		queryClient.invalidateQueries("clientData");
		queryClient.invalidateQueries("perfiles");
	};
	
	const handleEdit = async () => {
		// props.seteditCliked(true);
		props.setclientCardSelected(props.id);
	};

	return (
		<section className="flex flex-row justify-between bg-white w-full rounded-md p-3 hover:bg-slate-100">
			<div onClick={handleClick} className="w-full">
				<span className="text-3xl font-bold">#{props.id}</span>
				<div className="flex flex-col">
					<span className="font-bold text-blue-500">{props.name}</span>
					<span className="font-bold">Email: {props.email}</span>
				</div>
			</div>
			<div className="flex justify-center items-center gap-3 z-10">
				<Link to="edit" onClick={handleEdit} className="flex justify-center items-center w-10 h-10 bg-blue-500 rounded-md hover:bg-blue-400">
					<Edit width={28} height={28} strokeWidth={2} />
				</Link>
				<button
					onClick={handleDeleteClick}
					className="flex justify-center items-center w-10 h-10 bg-red-500 rounded-md hover:bg-red-400"
				>
					<Trash width={28} height={28} strokeWidth={2} />
				</button>
			</div>
		</section>
	);
};

export default ClientCard;
