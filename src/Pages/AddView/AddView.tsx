import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowBackUp } from "../../components/Icons";
import { Input } from "../../components";
import { FormData } from "./Types/IFormData";

const AddView = () => {
	const [formData, setFormData] = useState<FormData>({});
	const [message, setMessage] = useState(false);

	const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		axios.post("https://localhost:7160/url/mnt/Client", formData);
		// reset form data
		setFormData({});
		setMessage(true);
		setTimeout(() => setMessage(false), 3000);
	};

	// update formData when input values change
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	return (
		<>
			<form
				onSubmit={handleClick}
				className="flex flex-col justify-between bg-white w-full rounded-md gap-3 p-3"
			>
				<section className="">
					<Link
						className="flex justify-center items-center w-24 h-12 bg-blue-500 rounded-md hover:bg-blue-400"
						to="/"
					>
						<ArrowBackUp width={28} height={28} strokeWidth={2} />{" "}
					</Link>
				</section>
				<span className="text-2xl font-bold">Info</span>
				<section className="flex flex-row gap-3">
					<Input
						label="Nombre:"
						type="text"
						name="clientName"
						onChange={handleInputChange}
						value={formData.clientName}
					/>
					<Input
						label="Titulo:"
						type="text"
						name="perfilTitle"
						onChange={handleInputChange}
						value={formData.perfilTitle}
					/>
					<Input
						label="Telefono:"
						type="text"
						name="clientPhone"
						onChange={handleInputChange}
						value={formData.clientPhone}
					/>
				</section>
				<Input
					label="Email:"
					type="text"
					name="clientEmail"
					onChange={handleInputChange}
					value={formData.clientEmail}
				/>
				<Input
					label="Descripcion del titulo:"
					type="text"
					name="perfilDescription"
					onChange={handleInputChange}
					value={formData.perfilDescription}
				/>
				<span className="text-2xl font-bold">Ubicacion</span>
				<section className="flex flex-row gap-3">
					<Input
						label="Direccion:"
						type="text"
						name="addressLine"
						onChange={handleInputChange}
						value={formData.addressLine}
					/>
					<Input
						label="Ciudad:"
						type="text"
						name="city"
						onChange={handleInputChange}
						value={formData.city}
					/>
				</section>
				<section className="flex flex-row gap-3">
					<Input
						label="Estado:"
						type="text"
						name="state"
						onChange={handleInputChange}
						value={formData.state}
					/>
					<Input
						label="Pais:"
						type="text"
						name="country"
						onChange={handleInputChange}
						value={formData.country}
					/>
					<Input
						label="Codigo postal:"
						type="text"
						name="postalCode"
						onChange={handleInputChange}
						value={formData.postalCode}
					/>
				</section>
				<button className="bg-blue-500 h-12 rounded-md font-bold text-white hover:bg-blue-400">
					AGREGAR
				</button>
				{message && (
					<p className="bg-green-100 p-3 text-sm text rounded-md font-bold">Datos registrado correctamente</p>
				)}
			</form>
		</>
	);
};

export default AddView;
