import { Table } from 'antd';
import React, { useEffect } from 'react'
const { Column } = Table;

export default function BillsList(props) {
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

      </Table>
    </div>
  )
}
