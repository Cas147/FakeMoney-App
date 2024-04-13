import moment from "moment";
import { BlogPost } from "../interfaces/blog";
import { FORMATT_DATE } from "@/constants/formatDate";

export const tradingBlogPost: BlogPost = {
    likes: 140,
    author: "Santiago Hurtado",
    socialMedias: {
        instagram: "https://www.instagram.com/leadersantiago/",
        x: "https://twitter.com/IamTheCasti"
    },
    time: "5mins",
    date: moment().format(FORMATT_DATE.Date_Format),
    mainImage: "https://img.freepik.com/premium-vector/stock-market-forex-trading-graph-graphic-concept-financial-investment-economic-trends-business-idea-design-worldwide-finance-background-vector-illustration_208588-1737.jpg",
    title: "Los 5 Principales Consejos para Iniciar en el Mundo del Trading",
    description: "El mundo del trading puede ser apasionante y lucrativo, pero también puede ser abrumador para los principiantes.",
    sections: [
        {
            title: "Entendiendo la Importancia de la Gestión del Riesgo",
            content: "Una de las primeras lecciones que todo trader debe aprender es la gestión del riesgo. Esto implica determinar cuánto estás dispuesto a arriesgar en cada operación y establecer límites claros para tus pérdidas. Nunca inviertas más de lo que estés dispuesto a perder, y considera utilizar órdenes de stop-loss para proteger tus inversiones.",
            imageUrl: "https://www.bancolombia.com/wcm/connect/www.bancolombia.com-26918/08b845f6-ef3b-48c2-8347-0f2040a82775/ciclo-gestion-riesgo-desktop.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_K9HC1202P864E0Q30449MS3000-08b845f6-ef3b-48c2-8347-0f2040a82775-nVPWvSe"
        },
        {
            title: "Educación Continua: Nunca Dejes de Aprender",
            content: "El mercado financiero es dinámico y siempre cambia. Por lo tanto, es crucial mantenerse actualizado con las últimas tendencias y desarrollos. Dedica tiempo a estudiar diferentes estrategias de trading, analizar gráficos y leer libros sobre el tema. La educación continua te ayudará a tomar decisiones más informadas y a mejorar tus habilidades como trader.",
            imageUrl: ""
        },
        {
            title: "La Elección de la Plataforma Adecuada",
            content: "La plataforma de trading que elijas puede tener un gran impacto en tu experiencia como trader. Busca una plataforma que sea fácil de usar, confiable y que ofrezca una amplia gama de herramientas de análisis. Además, asegúrate de que la plataforma esté regulada por una autoridad financiera reconocida para garantizar la seguridad de tus fondos.",
            imageUrl: "https://fintatech.com/wp-content/webp-express/webp-images/uploads/2020/06/pic_3.png.webp"
        },
        {
            title: "Desarrolla una Estrategia de Trading",
            content: "No te aventures al mundo del trading sin tener una estrategia clara en mente. Define tus objetivos de inversión, tu tolerancia al riesgo y los criterios para entrar y salir de una operación. Prueba tu estrategia en una cuenta demo antes de aplicarla con dinero real y ajusta según sea necesario.",
            imageUrl: ""
        },
        {
            title: "Mantén tus Emociones a Raya",
            content: "El trading puede ser emocionante, pero también puede ser estresante. Es importante mantener tus emociones bajo control y no dejar que influyan en tus decisiones de inversión. Evita el miedo y la codicia, y mantén la disciplina incluso en momentos de volatilidad del mercado.",
            imageUrl: "https://www.tressis.com/wp-content/uploads/2020/04/previsiblemente-irracional.jpg"
        },
        {
            title: "Conclusión",
            content: "En resumen, iniciar en el mundo del trading puede ser desafiante pero gratificante. Es fundamental entender la importancia de la gestión del riesgo, seguir aprendiendo de manera continua, elegir la plataforma adecuada, desarrollar una estrategia sólida y mantener las emociones bajo control. ¡Buena suerte en tu viaje como trader!",
            imageUrl: ""
        }
    ],
};
