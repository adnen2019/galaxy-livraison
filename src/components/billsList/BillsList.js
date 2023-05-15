import { Table } from 'antd';
import React, { useEffect, useState } from 'react'
import InvoiceModal from './InvoiceModal';
const { Column } = Table;

export default function BillsList(props) {
  const [modalVisible,setModalVisible]=useState(false)
  const [bill,setBill]=useState({})

  useEffect(()=>{
    


    if(!props.bills?.length){
      props.getBills()
    }
  },[])
  console.log(props);
  return (
    <div>
      <Table
        // rowSelection={{
        //   selectedRowKeys,
        //   onSelect: onSelect,
        //   onSelectAll: onSelectAll,
        // }}
        // rowKey={(colis) => colis.serieColis}
        // hideSelectAll={false}
        // pagination={false}
        loading={props.loading}
        dataSource={props.bills}
      >
        <Column
          align="center"
          sorter={(a, b) => a.nomExpiditeurFactur.localeCompare(b.nomExpiditeurFactur)}
          // responsive={['lg']}
          title="Expiditeur"
          dataIndex="nomExpiditeurFactur"
          key="nomExpiditeurFactur"
        />

        <Column
          align="center"
          sorter={(a, b) => a.dateFactur.toString().localeCompare(b.dateFactur.toString())}
          // responsive={['lg']}
          title="Téléphone"
          dataIndex="dateFactur"
          key="dateFactur"
        />

        <Column
          align="center"
          sorter={(a, b) =>
            a.agenceExpiditeurFactur.localeCompare(b.agenceExpiditeurFactur)
          }
          // responsive={['lg']}
          title="Agence"
          dataIndex="agenceExpiditeurFactur"
          key="agenceExpiditeurFactur"
          responsive={["md"]}
        />
   <Column
          align="center"
          title="Actions"
          dataIndex="Actions"
          key="Actions"
          render={(text, bill, index) => {
            return (
              <div className="">
                <i onClick={()=>{setBill(bill)
                setModalVisible(true)
                }} className="feather icon-eye m-1"></i>
              </div>
            );
          }}
        />
      </Table>
      {modalVisible&&<InvoiceModal bill={bill} modalVisible={modalVisible} setModalVisible={setModalVisible} />}

    </div>
  )
}
