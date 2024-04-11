"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import Title from "@/components/Title/Title";
import { ISignal } from "./interfaces/signals";
import SignalsCard from "./components/SignalsCard";

const mockData: ISignal[] = [
  {
    action: "Buy",
    currency: "GBP/USD",
    description: "Potential buy setup forming for GBP/USD pair",
    status: "pending",
    timestamp: "2024-02-18T20:15:00Z",
  },
  {
    action: "Buy",
    currency: "USD/EUR",
    description: "Strong buy signal for USD/EUR pair",
    status: "won",
    timestamp: "2024-02-17T08:00:00Z",
  },
  {
    action: "Sell",
    currency: "GBP/JPY",
    description: "Sell recommendation for GBP/JPY pair",
    status: "lost",
    timestamp: "2024-02-16T15:30:00Z",
  },
  {
    action: "Buy",
    currency: "AUD/USD",
    description: "Buy opportunity detected for AUD/USD pair",
    status: "lost",
    timestamp: "2024-02-15T10:45:00Z",
  },
  {
    action: "Sell",
    currency: "EUR/JPY",
    description: "Bearish trend identified for EUR/JPY pair",
    status: "won",
    timestamp: "2024-02-14T09:20:00Z",
  },
];

interface FilterFormInput {
  sortBy: "asc" | "desc" | "";
  status: "Pendiente" | "Ganada" | "Perdida" | "";
  action: "Comprar" | "Vender" | "";
}

const Signals = (): JSX.Element => {
  const { register, control, reset, watch } = useForm<FilterFormInput>();
  const [filteredData, setFilteredData] = useState<ISignal[]>(mockData);

  const sortBy = watch("sortBy");
  const status = watch("status");
  const action = watch("action");

  console.log(sortBy, status, action);

  useEffect(() => {
    const filtered = mockData.filter((signal) => {
      const statusMatch =
        !status || signal.status.toLowerCase() === status.toLowerCase();
      const actionMatch =
        !action || signal.action.toLowerCase() === action.toLowerCase();
      return statusMatch && actionMatch;
    });

    let sorted = filtered;
    if (sortBy === "asc") {
      sorted = filtered.sort(
        (a, b) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
    } else if (sortBy === "desc") {
      sorted = filtered.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
    }

    setFilteredData(sorted);
  }, [sortBy, status, action]);

  const clearFilters = () => {
    reset();
    setFilteredData(mockData);
  };

  return (
    <>
      <Title text="Señales" />
      <form className="w-full mb-8 px-8 grid  grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4">
          <label
            htmlFor="sortBy"
            className="block mb-2 text-sm font-medium text-white"
          >
            Ordenar por:
          </label>
          <select
            {...register("sortBy")}
            id="sortBy"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-amber-400 focus:border-amber-400"
          >
            <option value="">Seleccione...</option>
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-white"
          >
            Estado:
          </label>
          <select
            {...register("status")}
            id="status"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-amber-400 focus:border-amber-400"
          >
            <option value="">Seleccione...</option>
            <option value="pending">Pendiente</option>
            <option value="won">Ganada</option>
            <option value="lost">Perdida</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="action"
            className="block mb-2 text-sm font-medium text-white"
          >
            Acción:
          </label>
          <select
            {...register("action")}
            id="action"
            className="text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-amber-400 focus:border-amber-400"
          >
            <option value="">Seleccione...</option>
            <option value="buy">Comprar</option>
            <option value="sell">Vender</option>
          </select>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        >
          Limpiar
        </button>
      </form>
      <div className="w-full flex flex-col items-center">
        {filteredData.map((signal: ISignal, index: number) => (
          <SignalsCard key={index} signal={signal} />
        ))}
      </div>
    </>
  );
};

export default Signals;
