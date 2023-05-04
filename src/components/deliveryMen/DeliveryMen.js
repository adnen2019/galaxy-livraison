import { Table } from 'antd';
import React, { useEffect } from 'react'
const { Column } = Table;

export default function DeliveryMen(props) {
  useEffect(()=>{
    


    if(!props.deliveryMen?.length){
      props.getDeliveryMen()
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
        loading={props.deliveryMenLoad}
        dataSource={props.deliveryMen}
      >
        <Column
          align="center"
          sorter={(a, b) => a.nom_livreur.localeCompare(b.nom_livreur)}
          // responsive={['lg']}
          title="Nom"
          dataIndex="nom_livreur"
          key="nom_livreur"
        />

        <Column
          align="center"
          sorter={(a, b) => a.phone_livreur.toString().localeCompare(b.phone_livreur.toString())}
          // responsive={['lg']}
          title="Téléphone"
          dataIndex="phone_livreur"
          key="phone_livreur"
        />

        <Column
          align="center"
          sorter={(a, b) =>
            a.agance_livreur.localeCompare(b.agance_livreur)
          }
          // responsive={['lg']}
          title="Agence"
          dataIndex="agance_livreur"
          key="agance_livreur"
          responsive={["md"]}
        />

      </Table>
    </div>
  )
}
