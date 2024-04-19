import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Quote } from "../../interfaces/Quote";
import Link from "next/link";

//example data type
type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Person[] = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Omaha",
    state: "Nebraska",
  },
];

const CurrenciesTable = ({data}: {data: Quote[]}) => {
  const columns = useMemo<MRT_ColumnDef<Quote>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Nombre",
        size: 150,
      },
      {
        accessorKey: "price",
        header: "Precio",
        size: 150,
        Cell: ({ row }) => {
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
        header: "24h cambio",
        size: 200,
        Cell: ({ row }) => {
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
        header: "24h Volumen",
        size: 150,
      },
      {
        accessorKey: "cap",
        header: "Cap. de mercado",
        size: 150,
      },
      {
        header: "actions",
        size: 150,
        Cell: ({ row }) => {
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
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableStickyHeader: true,
    mrtTheme: () => ({
      baseBackgroundColor: "#09090b",
    }),
    muiTableHeadCellProps: {
      sx: {
        fontStyle: "italic",
        fontWeight: "normal",
        color: "white",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        fontStyle: "italic",
        fontWeight: "normal",
        color: "white",
      },
    },
    muiSearchTextFieldProps: {
      size: "small",
      variant: "outlined",
      color: "primary",
    },
    muiPaginationProps: {
      color: "primary",
      rowsPerPageOptions: [30, 50, 100],
      shape: "rounded",
      variant: "outlined",
    },
  });

  return <MaterialReactTable table={table} />;
};

export default CurrenciesTable;
