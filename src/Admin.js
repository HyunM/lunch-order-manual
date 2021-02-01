import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import adminManual from "./AdminManual.pdf";
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
      <Document file={adminManual} onLoadError={console.error}>
        <Page pageNumber={pageNumber} />
      </Document>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "15%",
        }}
      >
        <p
          style={{
            marginTop: "2px",
            marginBottom: "2px",
          }}
        >
          Page {pageNumber} of {numPages}
        </p>
        <button onClick={handleClickPrev}>PREV</button>
        <button onClick={handleClickNext}>NEXT</button>
      </div>
    </div>
  );
};
