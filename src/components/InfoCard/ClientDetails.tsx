import { useState, useEffect } from "react";
import axios from "axios";
import { X } from "../Icons";

interface ClientData {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  perfilTitle: string;
  perfilDescription: string;
  addressLine: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

interface ClientProps {
  id: number;
  setisInforCardCliked: (newValue: boolean) => void;
}

const ClientDetails: React.FC<ClientProps> = ({ id, setisInforCardCliked }: ClientProps) => {
  const [clientData, setClientData] = useState<ClientData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get<ClientData[]>(
          `https://localhost:7160/url/mnt/Client/${id}`
        );
        setClientData(response.data[0]);
      } catch (error) {
        setClientData(null);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  const handleClick = () => {
    setisInforCardCliked(false)
  };

  return (
    <>
      {clientData ? (
        <article className="flex flex-col gap-3 bg-white rounded-md p-3">
          <div className="flex justify-between">
            <span className="flex justify-center items-center text-3xl font-bold">
              #{id}
            </span>
            <button
              className="hover:bg-blue-100 rounded-md"
              onClick={handleClick}
            >
              <X width={28} height={28} strokeWidth={2} />
            </button>
          </div>
          <section className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-blue-500">{clientData.clientName}</span>
              <span className="text-xl font-bold">{clientData.clientEmail}</span>
              <span className="text-xl font-bold">{clientData.clientPhone}</span>
            </div>
            <div>
              <span className="text-2xl font-bold">{clientData.perfilTitle}</span>
            </div>
          </section>
          <div className="">
            <span className="text-lg font-bold">Descripcion del titulo:</span>
            <div className="bg-blue-100 rounded-md p-3">
              {clientData.perfilDescription}
            </div>
          </div>
          <section className="flex gap-10">
            <div className="w-full">
              <span className="text-lg font-bold">Direccion:</span>
              <div className="bg-blue-100 rounded-md p-3">
                {clientData.addressLine}
              </div>
            </div>
            <div className="w-full">
              <span className="text-lg font-bold">Ciudad:</span>
              <div className="bg-blue-100 rounded-md p-3">{clientData.city}</div>
            </div>
          </section>
          <section className="flex gap-10">
            <div className="w-full">
              <span className="text-lg font-bold">Estado:</span>
              <div className="bg-blue-100 rounded-md p-3">{clientData.state}</div>
            </div>
            <div className="w-full">
              <span className="text-lg font-bold">Pais:</span>
              <div className="bg-blue-100 rounded-md p-3">{clientData.country}</div>
            </div>
            <div className="w-full">
              <span className="text-lg font-bold">Codigo Postal:</span>
              <div className="bg-blue-100 rounded-md p-3">
                {clientData.postalCode}
              </div>
            </div>
          </section>
        </article>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ClientDetails;
