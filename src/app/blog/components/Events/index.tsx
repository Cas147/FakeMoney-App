import { EventData } from "@/app/news/interfaces/news";
import { Key } from "lucide-react";
import { FaRegCalendar } from "react-icons/fa6";

const Events = ({ events }: { events: EventData[] }): JSX.Element => {
  return (
    <>
      {events.map((event: EventData) => {
        return (
          <div key={`${event.currency}-${event.changePercentage}`} className="my-4 rounded-md">
            <div className="flex">
              <p className="text-amber-400 mr-4">{event.currency}</p>
              <p className="mr-4 text-white font-bold">{event.event}</p>
            </div>
            <div className="flex items-center text-white font-extralight mt-2">
            <FaRegCalendar className="mr-8"/>
            <p className="mr-4">{event.date.split(" ")[0]}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Events;
