import { writeFile, utils, writeFileXLSX } from 'xlsx';

export const JsonToCsv=async(data)=> {
    /* convert state to workbook */
    // const ws = utils.aoa_to_sheet(data);
    const ws = utils.json_to_sheet(data);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "SheetJS");
    /* generate XLSX file and send to client */
    writeFile(wb, "sheetjs.xlsx");
  }