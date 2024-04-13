import React from "react";
import { TableOfContentsItem } from "../../interfaces/blog";
import { Separator } from "@/components/ui/separator";

const TableOfContents = ({
  items,
}: {
  items: TableOfContentsItem[];
}): JSX.Element => {
  return (
    <div className="w-full bg-gray-100 bg-opacity-10 px-4 py-3 text-left text-gray-800 break-words  rounded">
      <div className="mx-auto text-xl font-semibold">
        <strong className="text-white">Tabla de contenido</strong>
      </div>

      <Separator  className="border my-2"/>

      <ul className="mt-2 list-disc px-2 pl-6">
        {items.map((item) => (
          <li key={item.id} className="text-white">
            <a
              className="block hover:bg-amber-200 hover:text-black px-2 py-1 rounded"
              href={`#${item.id}`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
