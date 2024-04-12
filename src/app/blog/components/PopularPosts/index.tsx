import Link from "next/link";
import { FaBorderAll, FaRegClock } from "react-icons/fa6";

interface Post {
  title: string;
  imageUrl: string;
  time: string;
  description: string;
}

const posts: Post[] = [
  {
    title:
      "El Refugio del Toro: Desvelando Estrategias Ganadoras en la Bolsa de Valores",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1708015634879.jpg",
    time: "5 min",
    description:
      "Explora las últimas estrategias ganadoras en la bolsa de valores y obtén ideas para maximizar tus beneficios.",
  },
  {
    title:
      "Crónicas Cripto: Navegando las Olas Salvajes del Trading de Moneda Digital",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1708016728103.jpg",
    time: "3 min",
    description:
      "Navega a través del mundo volátil del trading de moneda digital con consejos y análisis de expertos.",
  },
  {
    title: "Odisea de Opciones: Dominando el Arte del Trading de Derivados",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1708016502358.jpg",
    time: "6 min",
    description:
      "Domina las complejidades del trading de derivados y descubre nuevas oportunidades en el mercado de opciones.",
  },
  {
    title: "Frontera Forex: Explorando los Mercados de Divisas Globales",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1708016064908.jpg",
    time: "5 min",
    description:
      "Embárcate en un viaje para explorar la dinámica del trading de forex y aprovechar el potencial de los mercados de divisas globales.",
  },
  {
    title:
      "Rincón de Materias Primas: Montando las Olas del Trading de Materiales Crudos",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1708015634879.jpg",
    time: "5 min",
    description:
      "Sumérgete en el mundo del trading de materias primas y aprende cómo montar las olas de los mercados de materias primas.",
  },
  {
    title:
      "Estrategias de Inversión a Largo Plazo: Construyendo tu Patrimonio Financiero",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1707950027415.jpg",
    time: "9 min",
    description:
      "Descubre las mejores estrategias para construir un patrimonio financiero a largo plazo y asegurar tu futuro financiero.",
  },
  {
    title:
      "Secretos del Swing Trading: Maximizando Ganancias en Movimientos de Corto Plazo",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1707949734413.jpg",
    time: "2 min",
    description:
      "Revelamos los secretos del swing trading y cómo puedes maximizar tus ganancias aprovechando los movimientos de corto plazo en el mercado.",
  },
  {
    title:
      "Guía del Trader Novato: Consejos Esenciales para Empezar en el Mundo del Trading",
    imageUrl:
      "https://cdn.financialmodelingprep.com/images/fmp-1707949591355.jpg",
    time: "5 min",
    description:
      "Una guía completa para principiantes que desean dar sus primeros pasos en el mundo del trading, con consejos esenciales y precauciones importantes.",
  },
];

const PopularPosts = (): JSX.Element => {
  return (
    <>
      {/*       <div className="flex text-amber-400 text-xl items-center">
        <FaBorderAll />
        <p className="ml-2">PUBLICACIONES POPULARES</p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full pr-8 my-8 ">
        {posts.map((post, index) => (
          <div key={index} className="grid gap-4">
            <div className="shadow-sm shadow-slate-500 rounded-xl w-full transition duration-300 transform hover:scale-95 hover:opacity-60">
              <div className="overflow-hidden relative h-40">
                <img
                  className="rounded-t-xl transition-transform duration-300 transform hover:scale-110"
                  width={"100%"}
                  height={100}
                  src={post.imageUrl}
                  alt=""
                />
                <div className="absolute bottom-2 left-2 bg-gray-500 rounded-lg px-1 text-white opacity-80 flex items-center">
                  <FaRegClock />
                  <p className="font-bold ml-2">{post.time}</p>
                </div>
              </div>
              <div className="p-5">
                <Link href={`/blog/${post.title}`}>
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-white">
                    {post.title}
                  </h5>
                </Link>
                <p className="mb-5 font-normal text-gray-500">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.title}`}
                  className="my-4 bg-gradient-to-r from-amber-300 to-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularPosts;
