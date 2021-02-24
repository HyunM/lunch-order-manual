import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import adminManual from "./AdminManual.pdf";
import "./Admin.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Admin = () => {
  const [numPages, setNumPages] = useState(20);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClickPrev = () => {
    const currentPage = pageNumber;
    if (currentPage !== 1) setPageNumber(currentPage - 1);
  };

  const handleClickNext = () => {
    const currentPage = pageNumber;
    if (currentPage !== 20) setPageNumber(currentPage + 1);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "30px",
        }}
      >
        <p
          style={{
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          Page {pageNumber} of {numPages}
        </p>
        <button
          style={{
            marginLeft: "20px",
            marginTop: "0px",
            marginBottom: "0px",
          }}
          onClick={handleClickPrev}
        >
          PREV
        </button>
        <button
          style={{
            marginLeft: "10px",
          }}
          onClick={handleClickNext}
        >
          NEXT
        </button>
      </div>
      <Document file={adminManual} onLoadError={console.error}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};
