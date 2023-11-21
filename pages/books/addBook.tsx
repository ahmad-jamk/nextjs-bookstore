import Layout from "@/components/Layout";
import { useState } from "react";

const AddBookPage: React.FC = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    number: 0,
    year: 0,
    ISBN: "",
    description: "",
    thumbnailUrl: "",
    fileUrl: "",
    pages: 0,
    category: "",
    language: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/books/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (response.ok) {
        console.log("Book added successfully");
        // Handle success, e.g., redirect or show a success message
      } else {
        console.error("Failed to add book");
        // Handle error, e.g., show an error message
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <h1>Add a Book</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Book</button>
      </form>
    </Layout>
  );
};

export default AddBookPage;
