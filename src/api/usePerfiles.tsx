import { useEffect, useState } from "react";
import axios from "axios";

type Profile = {
  perfilTitle: string;
};

const usePerfiles = () => {
  const [perfiles, setPerfiles] = useState<Profile[]>([]);

  useEffect(() => {
    const fetchPerfiles = async () => {
      try {
        const response = await axios.get(
          "https://localhost:7160/url/mnt/Client/all-data"
        );
        const data = response.data;

        // Create a Set with explicit type annotation for the perfilTitle
        const uniquePerfilesSet: Set<string> = new Set(
          data.map((item: any) => item.perfilTitle)
        );

        // Convert the Set back to an array with explicit type annotation
        const uniquePerfiles: Profile[] = Array.from(uniquePerfilesSet, perfilTitle => ({ perfilTitle }));

        // Add "Sin filtro" as the first element in the array of perfiles
        setPerfiles([{ perfilTitle: "Sin filtro" }, ...uniquePerfiles]);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchPerfiles();
  }, []);

  return perfiles;
};

export default usePerfiles;
