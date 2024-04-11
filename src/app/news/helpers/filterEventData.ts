import { EventData } from "../interfaces/news";
import moment, { months } from "moment";
import "moment-timezone";

export const convertToBogotaTimezone = (events: EventData[]): EventData[] => {
  return (events || []).map((event) => {
    const newDate = `${event.date} +0000`;
    const utcDate = new Date(newDate);

    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZone: "America/Bogota",
    };

    // Format the date and time according to the options and Colombia timezone
    const colombiaTime = new Intl.DateTimeFormat("en-US", options).format(
      utcDate
    );
    return {
      ...event,
      date: moment(colombiaTime).format("YYYY-MM-DD HH:mm"),
    };
  });
};

export const filterEventData = ({
  eventData,
  currencies,
  date,
}: {
  eventData: EventData[];
  currencies?: string[];
  date?: string;
}): any[] => {
  const eventDataInBogotaTimezone = convertToBogotaTimezone(eventData);
  return (eventDataInBogotaTimezone || []).filter((event) => {
    if (
      currencies &&
      currencies.length > 0 &&
      !currencies.includes(event.currency)
    ) {
      return false;
    }
    if (date && !event.date.includes(date)) {
      return false;
    }
    return true;
  });
};
