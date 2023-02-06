import React from 'react'
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { SheetToJson } from '../../utils/SheetToJson';
import DownloadExample from './DownloadExample';
const { Dragger } = Upload;
/* list of supported file types */
const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm"
]
  .map(function (x) {
    return "." + x;
  })
  .join(",");
const draggerProps = {
  name: 'file',
  multiple: false,
  // onChange(info) {
    // SheetToJson(info.file.originFileObj)
    // const { status } = info.file;
    // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    // }
    // if (status === 'done') {
    //   message.success(`${info.file.name} file uploaded successfully.`);
    // } else if (status === 'error') {
    //   message.error(`${info.file.name} file upload failed.`);
    // }
  // },
  onDrop(e) {
    // console.log('Dropped files', e.dataTransfer.files);
  },
};
const DraggerComponent = (props) => (
  <>
  <Dragger onChange={props.handleFile}  {...draggerProps}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Cliquez ou faites glisser le fichier dans cette zone pour le télécharger</p>
    <p className="ant-upload-hint">
    Prise en charge d'un téléchargement unique
    </p>
  </Dragger>
  <DownloadExample/>
  </>
);
export default DraggerComponent;
