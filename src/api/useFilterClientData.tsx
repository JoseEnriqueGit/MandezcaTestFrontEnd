import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
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
  keys: ["clientId" ,"clientName", "clientEmail"]
};

const useFilterClientData = (toSearch: string, selectedPerfil: string) => {
  const [allClientData, setAllClientData] = useState<ClientData[]>([]);
  const [filteredClientData, setFilteredClientData] = useState<ClientData[]>([]);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const response: AxiosResponse = await axios.get(
          "https://localhost:7160/url/mnt/Client/all-data"
        );
        setAllClientData(response.data);
      } catch (error) {
        console.error("Error fetching client data:", error);
      }
    };
    fetchClientData();
  }, []);

  useEffect(() => {
    const fuse = new Fuse(allClientData, options);
    const filteredByName = toSearch
      ? fuse.search(toSearch).map((result) => result.item)
      : allClientData;
    const filteredByPerfil =
      selectedPerfil !== "Sin filtro"
        ? filteredByName.filter((client) =>
            client.perfilTitle.toLowerCase().includes(selectedPerfil.toLowerCase())
          )
        : filteredByName;
    setFilteredClientData(filteredByPerfil);
  }, [toSearch, selectedPerfil, allClientData]);

  return { filteredClientData };
};

export default useFilterClientData;
