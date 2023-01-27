import { writeFile, utils, writeFileXLSX } from 'xlsx';

export default JsonToCsv=async()=> {
    /* convert state to workbook */
    const ws = utils.aoa_to_sheet(this.state.data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "SheetJS");
    /* generate XLSX file and send to client */
    writeFile(wb, "sheetjs.xlsx");
  }