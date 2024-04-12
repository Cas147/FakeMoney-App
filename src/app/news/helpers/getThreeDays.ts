import { FORMATT_DATE } from "@/constants/formatDate";
import moment from "moment";

const getThreeDays = (): string[] => {
  const today = new Date();
  const prevThreeDays = Array.from({ length: 1 }, (_, i) => {
    const prevDay = new Date(today);
    prevDay.setDate(today.getDate() - (3 - i));
    return moment(prevDay).format(FORMATT_DATE.Date_Format);
  });

  const nextThreeDays = Array.from({ length: 1 }, (_, i) => {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + (i + 1));
    return moment(nextDay).format(FORMATT_DATE.Date_Format);
  });

  return [
    ...prevThreeDays,
    moment(today).format(FORMATT_DATE.Date_Format),
    ...nextThreeDays,
  ];
};

export default getThreeDays;
