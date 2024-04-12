import Carousel from "@/components/Carousel";

import image1 from "../../../../assets/images/slider2.jpeg";

const RecentPosts = (): JSX.Element => {
  const images = [
    {
      id: 1,
      url: "https://www.bbva.com/wp-content/uploads/2017/03/2703-Apertura-Tendencias4-1024x416.jpg",
      title: "5 Estrategias Efectivas de Trading para Maximizar Ganancias",
      description:
        "Descubre las estrategias más efectivas para aumentar tus ganancias en el mercado financiero.",
      date: "2024-04-12",
    },
    {
      id: 2,
      url: "https://img.freepik.com/premium-vector/stock-market-forex-trading-graph-graphic-concept-financial-investment-economic-trends-business-idea-design-worldwide-finance-background-vector-illustration_208588-1737.jpg",
      title: "Cómo Realizar un Análisis Financiero Profesional",
      description:
        "Aprende a realizar un análisis financiero completo y tomar decisiones de inversión informadas.",
      date: "2024-04-10",
    },
    {
      id: 3,
      url: "https://png.pngtree.com/background/20230526/original/pngtree-bitcoin-cryptocurrency-and-the-future-of-trading-portfolio-picture-image_2748042.jpg",
      title: "Guía Completa sobre Criptomonedas y su Potencial en el Mercado",
      description:
        "Todo lo que necesitas saber sobre el mundo de las criptomonedas y cómo operar con ellas.",
      date: "2024-04-08",
    },
    {
      id: 4,
      url: "https://www.shutterstock.com/image-photo/binary-options-chart-assets-values-600nw-775889491.jpg",
      title:
        "Introducción a las Opciones Binarias: Funcionamiento y Estrategias",
      description:
        "Descubre cómo funcionan las opciones binarias y las estrategias para operar con ellas.",
      date: "2024-04-05",
    },
  ];
  return <Carousel images={images} />;
};

export default RecentPosts;
