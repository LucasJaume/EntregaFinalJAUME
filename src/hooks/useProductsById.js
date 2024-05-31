import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

export default function useProductsById(id) {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (id) {
      const db = getFirestore();
      const prodDoc = doc(db, "productos", id);

      getDoc(prodDoc)
        .then((snapshot) => {
          if (snapshot.exists()) {
            setProducto({ id: snapshot.id, ...snapshot.data() });
          } else {
            console.log("no se encontro");
          }
        })
        .catch((error) => {
          console.error("error de obtener productos", error);
        })
        .finally(() => setCargando(false));
    }
  }, [id]);

  return { producto, cargando };
}
