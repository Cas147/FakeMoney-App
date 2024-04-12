import { convertToBogotaTimezone } from "@/app/news/helpers/filterEventData";
import { EventData } from "@/app/news/interfaces/news";

export const getNextEvents = (events: EventData[]): EventData[] => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const adaptedEvents = convertToBogotaTimezone(events)

  const sameDateEvents = adaptedEvents.filter((event: EventData) => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === currentDate.toDateString();
  });

  if (sameDateEvents.length === 0) {
    return [];
  }

  sameDateEvents.sort((a, b) => {
    const timeA = new Date(a.date).getTime();
    const timeB = new Date(b.date).getTime();
    return timeA - timeB;
  });

  const nextEvents = sameDateEvents
    .filter((event) => {
      const eventHour = new Date(event.date).getHours();
      return eventHour >= currentHour;
    })
    .slice(0, 3);

  return nextEvents;
};
