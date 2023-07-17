import React, { useState, useEffect } from "react";
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { ArrowBackUp } from "../../components/Icons";
import { Input } from "../../components";
import { FormData } from "./Types/IFormData";

interface EditViewProps {
  id: number; // Replace 'string' with the actual type of your id (e.g., number, etc.)
}

const EditView: React.FC<EditViewProps> = ({ id }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [message, setMessage] = useState(false);

  useEffect(() => {
    // Fetch data for the specified id and update the formData state
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7160/url/mnt/GetClientFullData/${id}`);
        setFormData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Send the updated formData to the API using a PUT request.
      await axios.put(`https://localhost:7160/url/mnt/PutFullData/${id}`, formData);
      // Handle success or any other logic here.
      setMessage(true);
      setTimeout(() => setMessage(false), 3000);
      redirect("/");
    } catch (error) {
      // Handle error here.
      console.error("Error updating data:", error);
    }
  };

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
            value={formData.clientName || ""}
          />
          <Input
            label="Titulo:"
            type="text"
            name="perfilTitle"
            onChange={handleInputChange}
            value={formData.perfilTitle || ""}
          />
          <Input
            label="Telefono:"
            type="text"
            name="clientPhone"
            onChange={handleInputChange}
            value={formData.clientPhone || ""}
          />
        </section>
        <Input
          label="Email:"
          type="text"
          name="clientEmail"
          onChange={handleInputChange}
          value={formData.clientEmail || ""}
        />
        <Input
          label="Descripcion del titulo:"
          type="text"
          name="perfilDescription"
          onChange={handleInputChange}
          value={formData.perfilDescription || ""}
        />
        <span className="text-2xl font-bold">Ubicacion</span>
        <section className="flex flex-row gap-3">
          <Input
            label="Direccion:"
            type="text"
            name="addressLine"
            onChange={handleInputChange}
            value={formData.addressLine || ""}
          />
          <Input
            label="Ciudad:"
            type="text"
            name="city"
            onChange={handleInputChange}
            value={formData.city || ""}
          />
        </section>
        <section className="flex flex-row gap-3">
          <Input
            label="Estado:"
            type="text"
            name="state"
            onChange={handleInputChange}
            value={formData.state || ""}
          />
          <Input
            label="Pais:"
            type="text"
            name="country"
            onChange={handleInputChange}
            value={formData.country || ""}
          />
          <Input
            label="Codigo postal:"
            type="text"
            name="postalCode"
            onChange={handleInputChange}
            value={formData.postalCode || ""}
          />
        </section>
        <button className="bg-blue-500 h-12 rounded-md font-bold text-white hover:bg-blue-400">
          ACTUALIZAR
        </button>
        {message && (
          <p className="bg-green-100 p-3 text-sm text rounded-md font-bold">Datos actualizados correctamente</p>
        )}
      </form>
    </>
  );
};

export default EditView;
