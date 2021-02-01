import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import userManual from "./UserManual.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export const User = () => {
  const [numPages, setNumPages] = useState(13);
  const [pageNumber, setPageNumber] = useState(1);

  const handleClickPrev = () => {
    const currentPage = pageNumber;
    if (currentPage !== 1) setPageNumber(currentPage - 1);
  };

  const handleClickNext = () => {
    const currentPage = pageNumber;
    if (currentPage !== 13) setPageNumber(currentPage + 1);
  };

  return (
    <div>
      <Document file={userManual} onLoadError={console.error}>
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
