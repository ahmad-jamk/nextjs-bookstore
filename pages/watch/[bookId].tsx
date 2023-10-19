import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useBook from "@/hooks/useBook";
import { Document, Page, pdfjs } from "react-pdf";

const Watch = () => {
  const router = useRouter();
  const { bookId } = router.query;
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const { data } = useBook(bookId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon
          onClick={() => router.push("/")}
          className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
        />
        <p className="text-white text-1xl md:text-3xl font-bold">
          <span className="font-light">Reading:</span> {data?.title}
        </p>
      </nav>
      <Document file={data?.fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default Watch;
