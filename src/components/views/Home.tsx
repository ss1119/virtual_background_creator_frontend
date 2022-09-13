import { useState } from "react";
import { Header } from "../parts/Hearder";
import { EditArea } from "../templates/EditArea";
import { UploadArea } from "../templates/UploadArea";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <UploadArea />
        <EditArea />
      </div>
    </>
  );
};
