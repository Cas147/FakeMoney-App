import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Image from "next/image";

import Title from "@/components/Title/Title";
import EventCard from "./components/EventCard";

import eventImage from "@/assets/fakeEvent.webp";

const events = (): JSX.Element => {
  return (
    <div className="px-2 md:px-8 lg:px-12">
      <Title text="Eventos" />
      <div className="grid grid-cols-12 w-full px-4">
        <Image
          src={eventImage}
          className="w-full col-span-12 md:col-span-4"
          height={30}
          alt="Picture of the author"
        />
        <Image
          src={eventImage}
          className="w-full col-span-none md:col-span-4"
          height={30}
          alt="Picture of the author"
        />
        <Image
          src={eventImage}
          className="w-full col-span-none md:col-span-4"
          height={30}
          alt="Picture of the author"
        />
      </div>
      <p className="text-3xl text-center text-white font-bold my-4">
        Inscribete a nuestro proximo evento!
      </p>
      <p className="text-center text-white mb-4">
        Las oportunidades son regalos que el tiempo te da y que obtienes
        beneficios una vez las logras captar, a petición de muchos podrán
        obtener esa oportunidad para alcanzar ese crecimiento como
        inversionista, persona, profesor, compañero, padre, amigo, etc.
        Esperamos a quienes estén ansiosos de una oportunidad para pertenecer a
        esta gran comunidad destinada a su crecimiento, lo puedan hacer
        próximamente.
      </p>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-amber-400 text-2xl">
            Eventos Presenciales
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-white text-lg mt-4 mb-8">
              Únete a nuestros encuentros en persona para participar en sesiones
              de trading, talleres y conferencias donde podrás aprender y
              conectarte con otros entusiastas del mercado financiero.
            </p>

            <div className="my-4">
              <EventCard />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-amber-400 text-2xl">
            Eventos Virtuales
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-white text-lg mt-4 mb-8">
              Explora nuestra plataforma de eventos virtuales y participa desde
              cualquier lugar del mundo. Aprovecha la oportunidad de aprender en
              línea y conectar en tiempo real en las fechas y horarios
              programados.
            </p>

            <div className="my-4">
              <EventCard />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default events;
