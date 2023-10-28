import React, { useState } from "react";

import { BookInterface } from "@/types";
import BookCard from "@/components/Books/BookCard";
import { isEmpty } from "lodash";

interface BookListProps {
  data: BookInterface[];
  title: string;
}

const BookList: React.FC<BookListProps> = ({ data, title }) => {
  const [view, setView] = useState<"grid" | "table" | "twoColumns">("grid");
  const [sortOrder, setSortOrder] = useState<"ascending" | "descending">("ascending");
  // let sortedData=[...data];
  if (isEmpty(data)) {
    return null;
  }

  function switchViews(selectedView: string): void {
    setView(selectedView as "grid" | "table" | "twoColumns");
  }
  function toggleSortOrder(selectedOrder: string): void {
    setSortOrder(selectedOrder as "ascending" | "descending");
  }
  const sortedData : BookInterface[] = data.slice().sort((a, b) => {
    if (sortOrder === "ascending") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  console.log("sortedData", sortedData);

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <label htmlFor="viewSelect" className="text-white">
          Select View:
        </label>
        <select
          id="viewSelect"
          className="bg-blue-500 text-white rounded-full px-4 py-2 ml-2 focus:outline-none focus:shadow-outline-blue"
          value={view}
          onChange={(e) => switchViews(e.target.value)}
        >
          <option value="grid">Grid</option>
          <option value="table">Table</option>
          <option value="twoColumns">Two Columns</option>
        </select>

        <select
          id="sortSelect"
          className="bg-blue-500 text-white rounded-full px-4 py-2 ml-2 focus:outline-none focus:shadow-outline-blue"
          value={sortOrder}
          onChange={(e) => toggleSortOrder(e.target.value)}
        >
          <option value="grid">Ascending</option>
          <option value="table">Descending</option>
        </select>
        <div
          className={
            view === "table"
              ? "table-view"
              : view === "twoColumns"
              ? "grid grid-cols-2 gap-2"
              : "grid grid-cols-4 gap-2"
          }
        >
          {data.map((book) => (
            <BookCard key={sortedData?.id} data={sortedData} view={view} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
