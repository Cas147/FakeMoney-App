"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import getSevenDays from "../../helpers/getSevenDays";
import DateNavigator from "../DateNavigator";
import { economicCalendarNews } from "../../__Mock__/economicCalendar";
import moment from "moment";
import { useState, useEffect } from "react";
import { convertToBogotaTimezone, filterEventData } from "../../helpers/filterEventData";
import Select from "react-select";
import { EventData, CurrencyOption } from "../../interfaces/news";
import { getAllCurrencies } from "../../helpers/getAllCurrencies";
import { FaIndustry } from "react-icons/fa";
import { orderByDateAsc } from "../../helpers/orderByDateAsc";

const TableDemo = ({data}: {data: EventData[]}): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(3);
  const [dataToShow, setDataToShow] = useState<EventData[]>([]);
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  const impactColor = {
    Low: "text-yellow-300",
    Medium: "text-orange-500",
    High: "text-red-600",
    None: "text-grey",
  };

  useEffect(() => {
    const dataAdapted = filterEventData({
      eventData: data,
      currencies: selectedCurrencies,
      date: getSevenDays()[currentIndex],
    });

    if (dataAdapted) {
      setDataToShow(dataAdapted);
    }
  }, [currentIndex, selectedCurrencies]);

  return (
    <>
      <div className="flex items-bottom mb-4">
        <DateNavigator
          dates={getSevenDays()}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <div className="ml-8">
          <Select
            defaultValue={[]}
            isMulti
            name="colors"
            options={getAllCurrencies(economicCalendarNews)}
            onChange={(value) =>
              setSelectedCurrencies(value.map((v) => v?.value))
            }
            placeholder="Divisas"
            className="basic-multi-select"
            classNamePrefix="Divisas"
          />
        </div>
      </div>
      <Table className="bg-zinc-950">
        <TableCaption className="text-white">Lista de Noticias.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-white">Moneda</TableHead>
            <TableHead className=" text-white text-center">Impacto</TableHead>
            <TableHead className=" text-white">Evento</TableHead>
            <TableHead className=" text-white">Hora</TableHead>
            <TableHead className=" text-white">Actual</TableHead>
            <TableHead className=" text-white">Forecast</TableHead>
            <TableHead className=" text-white">Anterior</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-zinc-950">
          {(orderByDateAsc(dataToShow) || []).map((invoice, key) => (
            <TableRow
              key={`${invoice.event}-${key}`}
              className="border-none bg-zinc-950"
            >
              <TableCell className="font-medium text-white">
                {invoice.currency}
              </TableCell>
              <TableCell
                className={`${
                  impactColor[invoice.impact || "none"]
                } flex justify-center text-lg`}
              >
                <FaIndustry />
              </TableCell>
              <TableCell className=" text-white">{invoice.event}</TableCell>
              <TableCell className=" text-white">
                {invoice.date.split(" ")[1]}
              </TableCell>
              <TableCell
                className={`${
                  !invoice.estimate
                    ? "text-white"
                    : invoice.actual > invoice.estimate
                    ? "text-green-400"
                    : "text-red-600"
                }`}
              >
                {invoice.actual}
              </TableCell>
              <TableCell className="text-white">{invoice.estimate}</TableCell>
              <TableCell
                className={`${
                  !invoice.estimate
                    ? "text-white"
                    : invoice.actual > invoice.previous
                    ? "text-green-400"
                    : "text-red-600"
                }`}
              >
                {invoice.previous}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableDemo;
