import { Table } from 'antd'
import React from 'react'
const { Column } = Table;

export default function UploadedPackagesList(props) {
  return (
    <div>
        <Table 
        // rowSelection={{
        //   selectedRowKeys,
        //   // onChange: this.onChange,
        //   onSelect: this.onSelect,
        // }}
        hideSelectAll={true}
        // pagination={false} 
          // loading={loading}
        dataSource={props.packages}>
            <Column align="center" sorter={(a, b) => a.Nom.localeCompare(b.Nom)} 
          // responsive={['lg']} 
          title="Nom" dataIndex="Nom" key="Nom" />

 <Column align="center" sorter={(a, b) => a.Téléphone.localeCompare(b.Téléphone)} 
          // responsive={['lg']} 
          title="Téléphone" dataIndex="Téléphone" key="Téléphone" />

<Column align="center" sorter={(a, b) => a.Adresse.localeCompare(b.Adresse)} 
          // responsive={['lg']} 
          title="Adresse"  dataIndex="Adresse" key="Adresse"
          responsive={['md']} 
          
          />
{/* 
<Column align="center" sorter={(a, b) => a.detailColi.localeCompare(b.detailColi)} 
          responsive={['md']} 
          // responsive={['lg']} 
          title="Détail" dataIndex="detailColi" key="detailColi" /> */}

<Column align="center" sorter={(a, b) => a.Prix.localeCompare(b.Prix)} 
          // responsive={['lg']} 
          title="Prix" dataIndex="Prix" key="Prix" />
            

          {/* <Column align="center" title="Actions" dataIndex="Actions" key="Actions" 
          render={(text, question, index) => {
            return (<div className="" >
              <i className='feather icon-eye m-1' ></i> 
              <i className='feather icon-edit m-1' ></i> 
              <i className='feather icon-trash-2 m-1' ></i> 
            </div>)}}
          />  */}

        </Table>
        <div className='d-flex justify-content-end' >
          <button onClick={()=>{props.setPackages([])}} className='btn btn-secondary rounded m-1' >Annuler</button>
          <button onClick={()=>{props.setPackages([])}} className='btn btn-primary rounded m-1' >Ajouter</button>
        </div>
    </div>
  )
}
