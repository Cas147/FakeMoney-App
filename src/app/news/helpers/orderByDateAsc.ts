import moment from "moment";
import { EventData } from "../interfaces/news";

export const orderByDateAsc = (eventData: EventData[]) => {
  return eventData.sort((a, b) => {
    return moment(a.date, "YYYY-MM-DD HH:mm:ss").diff(
      moment(b.date, "YYYY-MM-DD HH:mm:ss")
    );
  });
};
