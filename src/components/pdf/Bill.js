import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Svg,
  Path,
} from "@react-pdf/renderer";
import { renderToStaticMarkup } from "react-dom/server";
import ReactHtmlParser from "react-html-parser";
import logo from "../../assets/images/logo.png";
// import { QRCode } from "react-qr-svg";
import QRCode from "react-qr-code";
import moment from "moment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
    flexDirection: "column",

    // flex:1,
    // border: 3,
  },
  container: {
    flexDirection: "row",
    border: 2,
    display: "flex",
    marginHorizontal:10,
    marginTop:10,

    justifyContent: "center",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  column: {
    flexDirection: "column",
    margin: 1,
    padding: 1,
    border: 2,
    width:"50%"
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    // margin: 1,
    // padding: 1,
    // border: 2,
  },
  qrSection: {
    display: "flex",

    margin: 1,
    padding: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  imageSection: { margin: 1, padding: 1 },
  image: {
    // width: 500,
    height: 50,
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "aqua",
    width: "100%",
  },
});
function Bill(props) {
  console.log(props)
  const {
    nomDistinateur,
    telDistinatair,
    adressDistinatair,
    dicriptionColis,
    vilDistinateur,
    prisColis,
    serieColis,
    datAjoutColis,
    nomExpiditeur,
    numeroExpiditeur,
    villExpiditeur,
    detailColi,
  } = props.pkg;
  
  const qrCodeComponent = <QRCode value={serieColis} />;

  const qrCodeComponentStaticMarkup = renderToStaticMarkup(qrCodeComponent);

  const parsedQrCodeSvg = parseQrCodeMarkup(qrCodeComponentStaticMarkup);
  if (!parsedQrCodeSvg) {
    return null;
  }
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.container}>
            <View style={styles.column}>
              <Text>Pickup: {datAjoutColis}</Text>
              <View style={styles.title}>
                <Text>Expiditeur</Text>
              </View>
              <Text>Nom et Prenom: {nomExpiditeur}</Text>
              {/* store */}
              <Text>Raison sociale: 
                {props?.user?.raisonSosial}
                </Text>

              <Text>Agence: {villExpiditeur}</Text>
              <Text>Tel: {numeroExpiditeur}</Text>

              {/* store */}
              <Text>Email: 
                {props?.user?.emailExpiditeur}
                </Text>
            </View>
            <View style={styles.column}>
              <View style={styles.row}>
                <View>
                  <Text>www.galaxylivraison.com</Text>
                  <Text>Tel :98545546</Text>
                </View>
                <View style={styles.imageSection}>
                  <Image style={styles.image} src={logo} />
                </View>
              </View>
              <View style={styles.row}>
                <Svg style={{ width: 150, height: 150 }} viewBox="0 0 29 29">
                  {parsedQrCodeSvg.props.children
                    .filter((c) => c.type === "path")
                    .map((child, index) => (
                      <Path
                        key={index}
                        d={child.props.d}
                        fill={child.props.fill}
                      />
                    ))}
                </Svg>
              </View>
              <View style={styles.row}>
                <Text>GL-{serieColis}</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.title}>
                <Text>Client</Text>
              </View>

              <View style={styles.title}>
                <Text>Détail</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.column}>
            <Text>Nom et Prenom: {nomDistinateur}</Text>
              {/* store */}
              <Text>Adresse: {adressDistinatair}-{vilDistinateur}</Text>
              <Text>Tel: {telDistinatair}</Text>
            </View>

            <View style={styles.column}>
            <Text>{dicriptionColis}</Text>
            <Text>Poids: {detailColi}</Text>
          
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.column}>
            <View style={styles.row}>
            <View >
                <Text>Signature et Cachet</Text>
              </View>
        </View>
        <View style={styles.row}>
            <View style={{height:50}} >
              </View>
        </View>
            </View>

            <View style={styles.column}>
            <View style={styles.row}>
            <Text>Prix:{prisColis} DT</Text>
            </View>
            </View>

          </View>
        </Page>
      </Document>
    </>
  );
}
const parseQrCodeMarkup = (markup) => {
  let parsedQrCodeSvg = null;

  ReactHtmlParser(markup).forEach((el) => {
    const { type } = el;
    if (type === "svg") {
      parsedQrCodeSvg = el;
    }
  });
  return parsedQrCodeSvg;
};
// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//   };
// };
export default (Bill);