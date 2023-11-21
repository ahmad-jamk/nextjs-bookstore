import React, { ChangeEvent } from "react";

interface BookFormProps {
  bookData: {
    title: string;
    author: string;
    number?: number;
    year: number;
    ISBN: string;
    description: string;
    thumbnailUrl: string;
    fileUrl: File | null;
    pages: number;
    category: string;
    language: string;
  };
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BookFormAdd: React.FC<BookFormProps> = ({
  bookData,
  onInputChange,
  onFileChange,
}) => {
  return (
    <form className="max-w-md mx-auto mt-8 p-4 bg-white shadow-md rounded-md  grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <label className="block mb-2 text-sm font-semibold text-gray-600">
          Title:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="title"
            value={bookData.title}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          Author:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="author"
            value={bookData.author}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          Number:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            name="number"
            value={bookData.number || ""}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          Year:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            name="year"
            value={bookData.year}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          ISBN:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="ISBN"
            value={bookData.ISBN}
            onChange={onInputChange}
          />
        </label>
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-sm font-semibold text-gray-600">
          Description:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="description"
            value={bookData.description}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          Thumbnail URL:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="thumbnailUrl"
            value={bookData.thumbnailUrl}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          File URL:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="file"
            name="fileUrl"
            value={bookData.fileUrl}
            onChange={onFileChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          Pages:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            name="pages"
            value={bookData.pages}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          Category:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="category"
            value={bookData.category}
            onChange={onInputChange}
          />
        </label>

        <label className="text-sm font-semibold text-gray-600">
          Language:
          <input
            className="w-full px-4 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            name="language"
            value={bookData.language}
            onChange={onInputChange}
          />
        </label>

        <button
          className="mt-4 px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          type="submit"
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default BookFormAdd;
