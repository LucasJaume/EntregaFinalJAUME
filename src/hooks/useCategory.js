import { useEffect, useState } from "react";
import { getProdByCategoria } from "../componentes/Mock/MockAsincro";


export default function useCategory() {
  const [category, setCategory] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    getProdByCategoria()
    .then((data) => setCategory(data))
      .finally(() => setCargando(false));
  }, [category]);

  return { category, cargando };
}
