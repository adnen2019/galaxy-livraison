import { Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";
import moment from "moment";
import React from "react";

// Define the styles for the table
const styles = StyleSheet.create({
  container:{
    margin:5,
    marginTop:25,
    fontSize:"12px",
    // alignItems:"center",
    flexWrap:"wrap"
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    height: 25,
  },
  tableColHeader: {
    backgroundColor: "#f0f0f0",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 1,
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    padding: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  font1: {
 fontSize:"12px",
 alignItems:"center",
 flexWrap:"wrap"
 
 
  },
});

export default function PackagesList(props) {
  // console.log(props);
const {nomExpiditeur,telExpiditeur,raisonSosial,idExpiditeur,adressExpiditeur,agenceExpiditeur}=props.user

  // Render the table header
  const renderTableHeader = () => {
    return (
      <View style={styles.tableRow}>
        <View style={[styles.tableColHeader, { width: "20%" }]}>
          <Text>Nom/N°:Serie</Text>
        </View>
        <View style={[styles.tableColHeader, { width: "20%" }]}>
          <Text>Téléphone</Text>
        </View>
        <View style={[styles.tableColHeader, { width: "25%" }]}>
          <Text>Adresse Destinataire</Text>
        </View>
        <View style={[styles.tableColHeader, { width: "20%" }]}>
          <Text>Détail</Text>
        </View>
        <View style={[styles.tableColHeader, { width: "15%" }]}>
          <Text>Prix</Text>
        </View>
        
      </View>
    );
  };

  // Render a table row
  const renderTableRow = (item) => {
    return (
      <View style={styles.tableRow} key={item.serieColis}>
        <View style={[styles.tableCol, { width: "20%" }]}>
          <Text>{item.serieColis}</Text>
        </View>
        <View style={[styles.tableCol, { width: "20%" }]}>
          <Text>{item.telDistinatair}</Text>
        </View>
        <View style={[styles.tableCol, { width: "25%" }]}>
          <Text>{item.adressDistinatair}</Text>
        </View>
        <View style={[styles.tableCol, { width: "20%" }]}>
          <Text>{item.dicriptionColis}</Text>
        </View>
        <View style={[styles.tableCol, { width: "15%" }]}>
          <Text>{item.prisColis}</Text>
        </View>
      </View>
    );
  };

  return (
    <Document>
      <Page>
        <View style={styles.container} >
          <View  style={styles.row}>
            <View style={styles.font1}>
            <Text>Société:{nomExpiditeur} </Text>
          <Text>MF/C.I.N:{raisonSosial} </Text>
          <Text>Adresse:{adressExpiditeur},{agenceExpiditeur} </Text>
          <Text>Téléphone:{telExpiditeur} </Text>
            </View>
            <View style={styles.font1}>
            <Text>Bon de livraison N°: </Text>
            <Text>{idExpiditeur+moment().format("MMDDHHmmssSS")} </Text>
            <Text>Total des Colis: {props.packages.length} </Text>

            </View>
            <View style={styles.font1}>
          <Text>Au dépot: Galaxy livraison.</Text>
          <Text>Siège social: Avenue de</Text>
          <Text>l indépendance immeuble saidene</Text>
          <Text>
              2éme étage 4000 Sousse.</Text>
          <Text>Téléphone: 98 545 546 </Text>
              
              
              
            </View>
          </View>
          <View style={styles.table}>
            {renderTableHeader()}
            {props.packages.map(renderTableRow)}
          </View>
        </View>
      </Page>
    </Document>
  );
}
