const productos = [
  {
    id: 1,
    title: "Bicicleta Scott Aspect 980",
    price: 620269,
    description: "Equipada con transmisión de 12 velocidades Shimano y una horquilla Suntour, junto con tecnología de bloqueo remoto para permitir diferentes ajustes del recorrido en función de las necesidades de cada momento. ",
    category: "bicicletas",
    image: "https://yuhmak.vtexassets.com/arquivos/ids/174057-1200-auto?v=638243375890230000&width=1200&height=auto&aspect=true",
    stock: 5
  },
  {
    id: 2,
    title: "Bicicleta Scott Aspect 750",
    price: 575505,
    description: "Bicicleta de montaña rígida sin suspensión trasera, diseñada para ser ligera, eficaz y con un precio razonable. Los frenos son de disco y los componentes de Syncros. Es el modelo perfecto para principiantes",
    category: "bicicletas",
    image: "https://d2yn9m4p3q9iyv.cloudfront.net/scott/2021/aspect-750/thumbs/1000/b288e.webp",
    stock: 3
  },
  {
    id: 3,
    title: "Bicicleta Zenith Astra R29",
    price: 1844147,
    description: "Es una bicicleta de montaña de gama alta para cross country y trail. Cuenta con un cuadro de aluminio 6061 triple butted y una geometría orientada al rendimiento.",
    category: "bicicletas",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_813861-MLA71588894063_092023-F.webp",
    stock: 5
  },
  {
    id: 4,
    title: "Bicicleta Zenith Calea Elite",
    price: 995000,
    description: "Es una bicicleta de montaña de 29 pulgadas con cuadro de aluminio 6061, horquilla de suspensión Rock Shox y componentes Zenith Al Comp",
    category: "bicicletas",
    image: "https://http2.mlstatic.com/D_NQ_NP_691736-MLA70197150084_062023-O.webp",
    stock: 2
  },
  {
    id: 5,
    title: "Skate Completo Seal Element",
    price: 169999,
    description: "Skate Completo Seal Element, un clásico que ofrece rendimiento confiable. Destacado por el logotipo del árbol de ELEMENT en la parte inferior central.",
    category: "skates",
    image: "https://http2.mlstatic.com/D_NQ_NP_676443-MLU75934653885_042024-O.webp",
    stock: 4
  },
  {
    id: 6,
    title: "Skate Hatched White Gold Element",
    price: 169999,
    description: "La patineta Hatched White Gold presenta nuestra marca clásica en elegantes colores dorados en la parte inferior. Este equipo completo ofrece una conducción suave y lista para la calle para patinadores de muchos niveles, incluido el principiante. Fiables y centrados en el rendimiento",
    category: "skates",
    image: "https://http2.mlstatic.com/D_NQ_NP_950392-MLA49714203013_042022-O.webp",
    stock: 6
  },
  {
    id: 7,
    title: "Skate Tatu Wizzard",
    price: 99000,
    description: "Skate para iniciantes, compuesto de Tabla de Arce estampada, griptape plástico, ruedas Woodoo SHR 95A, Rulemanes ABEC3 y Trucks negro mate con bujes SHR de dureza intermedia.",
    category: "skates",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_707520-MLU75534883146_042024-F.webp",
    stock: 7
  },
  {
    id: 8,
    title: "Skate Scooter Italy Canadiense",
    price: 145000,
    description: "Skate Profesional Scooter Italy Retro Serie. Skateboard profesional de la línea Neon & Graffiti Series es la combinación perfecta entre calidad, diseño y rendimiento.",
    category: "skates",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_969482-MLU75966137382_052024-F.webp",
    stock: 5
  },
  {
    id: 9,
    title: "Scooter Envy Prodigy S8",
    price: 344599,
    description: "El Scooter Envy Prodigy es el modelo para Freestyle numero 1 de ventas en el mundo. Y en esta nueva linea llamado Series 8 ahora presenta una edición Street con componentes específicos para la calle.",
    category: "monopatines",
    image: "https://http2.mlstatic.com/D_NQ_NP_738856-MLA49378060477_032022-O.webp",
    stock: 2
  },
  {
    id: 10,
    title: "Scooter Pro Bestial Wolf Rocky 12",
    price: 416799,
    description: "Versión totalmente renovada del Rocky, versión R12, el scooter ideal para los riders más experimentados. Scooter Profesional Nivel Pro Avanzado con tabla color RAINBOW (Tornasolado) y manubrio de color negro.",
    category: "monopatines",
    image: "https://http2.mlstatic.com/D_NQ_NP_763921-MLA71388390631_082023-O.webp",
    stock: 4
  },
  {
    id: 11,
    title: "Scooter Envy Colt Series",
    price: 364000,
    description: "La Envy Colt Series es una opción excelente para aquellos que buscan un scooter fiable, bien construido y visualmente atractivo. Es una elección ideal para principiantes que desean un scooter con características avanzadas que les permita progresar en sus habilidades.",
    category: "monopatines",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_892170-MLA71008805730_082023-F.webp",
    stock: 4
  },
  {
    id: 12,
    title: "Scooter Pro Bestial Wolf Hunter-56",
    price: 320000,
    description: "El Bestial Wolf Hunter-56 es un scooter profesional de alta gama, ideal para aquellos que buscan un equipo fiable, con una construcción robusta, componentes de alta calidad y diseño ergonómico.",
    category: "monopatines",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_786666-MLA71547409905_092023-F.webp",
    stock: 8
  },
]


export const getProd = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos)
    }, 2300);
  })
}

export const getProdById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productId = parseInt(id); // Convertir el ID a número
      const producto = productos.find((producto) => producto.id === productId);
      if (producto) {
        resolve(producto);
      } else {
        reject("Producto no encontrado");
      }
    }, 2300);
  });
};



export const getProdByCategoria = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((producto) => producto.category === category))
    }, 2300)
  });
}