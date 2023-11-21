import Layout from "@/components/Layout";
import { useState, ChangeEvent } from "react";
import BookFormAdd from "@/components/Books/BookFormAdd";

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;

    setBookData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? parseInt(value, 10) || 0 : value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add your form submission logic here
    console.log("Book data:", bookData);
  };

  return (
    <Layout>
      <h1>Add a Book</h1>
      <BookFormAdd bookData={bookData} onInputChange={handleInputChange} />
    </Layout>
  );
};

export default AddBookPage;
