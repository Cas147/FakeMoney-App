"use client";
import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { mockData } from "../../__Mocks__/mockdata";
import { Quote } from "../../interfaces/Quote";
import TabsTable from "@/components/TabsForTable";
import { getMarketData } from "../../helpers/marketsInfoAdapters";
import { useGetMarkets } from "../../hooks/useGetMarket";
import { getMartkets } from "../../services/markets";
import Link from "next/link";

export const columns: ColumnDef<Quote>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-amber-400 text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombre
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-amber-400 text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Precio
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "change",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-amber-400 text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          24H Cambio
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div
          className={`font-medium ${
            Number(row.getValue("change")) > 0
              ? "text-green-400"
              : "text-red-600"
          }`}
        >
          {row.getValue("change")}%
        </div>
      );
    },
  },
  {
    accessorKey: "volumen",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-amber-400 text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          24h Volumen
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("volumen")}</div>,
  },
  {
    accessorKey: "cap",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="hover:bg-amber-400 text-white"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Cap. de mercado
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("cap")}</div>,
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const currency = row.original;
      return (
        <Link
          href={`/markets/${currency.id}`}
          rel="noopener noreferrer"
          target="_blank"
          className="relative p-2 text-sm font-medium text-centerinline-flex items-center border border-amber-400 justify-center mb-2 me-2 overflow-hidden rounded-lg group bg-gradient-to-br hover:from-amber-300 hover:to-orange-600  text-white"
        >
          Detalle
        </Link>
      );
    },
  },
];

const MarketTable = (): JSX.Element => {
  const tabs: Tab[] = [
    {
      id: "cryptocurrencies",
      title: "Cryptos",
      content: <div>Content for Tab 1</div>,
    },
    {
      id: "forex-currency-pairs",
      title: "Forex",
      content: <div>Content for Tab 2</div>,
    },
    {
      id: "commodities",
      title: "Commodities",
      content: <div>Content for Tab 2</div>,
    },
  ];

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0].id);

  const { data, isLoading } = useGetMarkets(activeTab);

  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});

  const table = useReactTable({
    data: getMarketData(data) || [],
    columns,
    initialState: {
      pagination: {
        pageSize: 30,
      },
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar por nombre."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm text-white border-slate-700 border mr-4"
        />
        <TabsTable
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isLoading={isLoading}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="ml-auto text-white border-slate-700 border"
            >
              ver <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border-none">
        <Table className="border-none">
          <TableHeader className="border-none">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-transparent border-slate-700 border-b"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="text-white hover:bg-zinc-600 border-none"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            className="text-white"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            className="text-white"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketTable;
