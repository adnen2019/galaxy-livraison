import { Table } from 'antd';
import React, { useEffect } from 'react'
const { Column } = Table;

export default function Senders(props) {
  useEffect(()=>{
    if(!props.senders?.length){
      props.getSenders()
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
        loading={props.sendersLoad}
        dataSource={props.senders}
      >
        <Column
          align="center"
          sorter={(a, b) => a.nomExpiditeur.localeCompare(b.nomExpiditeur)}
          // responsive={['lg']}
          title="Nom"
          dataIndex="nomExpiditeur"
          key="nomExpiditeur"
        />

        <Column
          align="center"
          sorter={(a, b) => a.telExpiditeur.toString().localeCompare(b.telExpiditeur.toString())}
          // responsive={['lg']}
          title="Téléphone"
          dataIndex="telExpiditeur"
          key="telExpiditeur"
        />

        <Column
          align="center"
          sorter={(a, b) =>
            a.agenceExpiditeur.localeCompare(b.agenceExpiditeur)
          }
          // responsive={['lg']}
          title="Agence"
          dataIndex="agenceExpiditeur"
          key="agenceExpiditeur"
          responsive={["md"]}
        />

      </Table>
    </div>
  )
}
