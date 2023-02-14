import { Select } from "antd";
import React, { useState } from "react";
import DoughnutChart from "./DoughnutChart";
const { Option } = Select;

export default function Dashboard(props) {
  const [gov,setGov]=useState("Tout")
  const children = [];

  const locationsList = [
  "Tout"  ,
  "Ariana",
  "Béja",
  "Ben Arous",
  "Bizerte",
  "Gabes",
  "Gafsa",
  "Jendouba",
  "Kairouan",
  "Kasserine",
  "Kasserine",
  "Kef",
  "Kelibia",
  "Manouba",
  "Mahdia",
  "Médenine",
  "Monastir",
  "Nabeul",
  "Sfax",
  "Sidi Bouzid",
  "Siliana",
  "Sousse",
  "Tataouine",
  "Tozeur",
  "Tunis",
  "Zaghouan"]

  for (let i = 0; i < locationsList.length; i++) {
    children.push(
      <Option key={i} value={locationsList[i]}>
        {locationsList[i]}
      </Option>
    );
  }
  let packages=props.packages
  if(gov=="Tout"){}else{
    packages=packages.filter((pkg)=>pkg.agenceLivraison==gov)
  }
  let x1=packages.filter((pkg)=>pkg.etatLivraison=="Collect").length
  let x2=packages.filter((pkg)=>pkg.etatLivraison=="En Cours de Verification").length
  let x3=packages.filter((pkg)=>pkg.etatLivraison=="Echange").length
  let x4=packages.filter((pkg)=>pkg.etatLivraison=="Livrer").length
  let x5=packages.filter((pkg)=>pkg.etatLivraison=="Depot").length
  let x6=packages.filter((pkg)=>pkg.etatLivraison=="Annuler").length
  let x7=packages.filter((pkg)=>pkg.etatLivraison=="Retour").length
  return (
    <div>
      <div className=" col-lg-6 col-md-12 ">
            <label className="">ville *</label>
            <br />
            <Select
              className="border form-control p-0 d-flex align-items-center"
              // style={{ width: '40%' }}
              defaultValue={"Tout"}
              showSearch
              mode=""
              allowClear
              required
              placeholder="Rechercher pour sélectionner"
              onChange={setGov}
            >
              {children}
            </Select>
            <br />
          </div>
      <div className="text-center m-0 fw-bold text-secondary col-md-12 col-lg-6">
        Statistiques des colis
        <DoughnutChart
          labels={[
            "Collect",
            "En Cours de Verification",
            "Echange",
            "Livrer",
            "Depot",
            "Annuler",
            "Retour",
          ]}
          colors={[
            "rgb(0, 0, 0)",
            "rgb(5, 19, 103)",
            "rgb(45, 49, 250)",
            "rgb(93, 139, 244)",
            "rgb(223, 246, 255)",
            "rgb(45, 49, 250)",
            "rgb(93, 139, 244)",
          ]}
          data={[x1, x2, x3, x4, x5, x6,x7]}
          title={""}
        />
      </div>
    </div>
  );
}
