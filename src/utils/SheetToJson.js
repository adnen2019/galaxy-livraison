import { read, utils, writeFileXLSX } from "xlsx";

export const SheetToJson = async (file, cb) => {
  /* Boilerplate to set up FileReader */
  const reader = new FileReader();
  const rABS = !!reader.readAsBinaryString;
  reader.onload = (e) => {
    /* Parse data */
    const bstr = e.target.result;
    const wb = read(bstr, { type: rABS ? "binary" : "array" });
    /* Get first worksheet */
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    //  console.log(rABS, wb);
    /* Convert array of arrays */
    const data = utils.sheet_to_json(ws, { header: 0 });
    /* Update state */
    console.log(data);
    const normalizedData = data.map((pkg) => ({
      nomDistinateur:pkg["Nom & prénom"],
      telDistinatair:pkg["Numéro de téléphone"],
      vilDistinateur:pkg["Ville"],
      adressDistinatair:pkg["Adresse"],
      prisColis:pkg["COD"],
      dicriptionColis:pkg["Libelle de marchandise "],
    }));
    cb(normalizedData);
    //  console.log(data,make_cols(ws["!ref"]));
    //    this.setState({ data: data, cols: make_cols(ws["!ref"]) });
  };
  if (rABS) reader.readAsBinaryString(file);
  else reader.readAsArrayBuffer(file);
};
/* generate an array of column objects */
const make_cols = (refstr) => {
  let o = [],
    C = utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: utils.encode_col(i), key: i };
  return o;
};
