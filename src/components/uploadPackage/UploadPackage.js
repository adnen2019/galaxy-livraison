import React, { useState } from "react";
import { SheetToJson } from "../../utils/SheetToJson";
import DraggerComponent from "./DraggerComponent";
import UploadedPackagesList from "./UploadedPackagesList";

export default function UploadPackage() {
  const [packages, setPackages] = useState([]);

  const handleFile = (info) => {
    SheetToJson(info.file.originFileObj,setPackages)

  };

  return (
    <div>
      {packages.length ? (
        <UploadedPackagesList packages={packages} setPackages={setPackages} />
      ) : (
        <DraggerComponent handleFile={handleFile} />
      )}
    </div>
  );
}
