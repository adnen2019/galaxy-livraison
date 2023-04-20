import { Table } from 'antd';
import React, { useEffect } from 'react'
const { Column } = Table;

export default function Senders(props) {
  useEffect(()=>{
    if(!props.aaaa){
      props.vvvv
    }
  },[])
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
        dataSource={props.senders}
      >
        <Column
          align="center"
          sorter={(a, b) => a.serieColis.localeCompare(b.serieColis)}
          // responsive={['lg']}
          title="Nom/N°:Serie"
          dataIndex="serieColis"
          key="serieColis"
        />

        <Column
          align="center"
          sorter={(a, b) => a.telDistinatair.toString().localeCompare(b.telDistinatair.toString())}
          // responsive={['lg']}
          title="Téléphone"
          dataIndex="telDistinatair"
          key="telDistinatair"
        />

        <Column
          align="center"
          sorter={(a, b) =>
            a.adressDistinatair.localeCompare(b.adressDistinatair)
          }
          // responsive={['lg']}
          title="Adresse Destinataire"
          dataIndex="adressDistinatair"
          key="adressDistinatair"
          responsive={["md"]}
          render={(text, colis, index) => {
            return (
              <>
                {colis.adressDistinatair}/{colis.vilDistinateur}
              </>
            );
          }}
        />

        <Column
          align="center"
          sorter={(a, b) => a.dicriptionColis.localeCompare(b.dicriptionColis)}
          responsive={["md"]}
          // responsive={['lg']}
          title="Détail"
          dataIndex="dicriptionColis"
          key="dicriptionColis"
        />

        <Column
          align="center"
          sorter={(a, b) => a.prisColis.toString().localeCompare(b.prisColis.toString())}
          // responsive={['lg']}
          title="Prix"
          dataIndex="prisColis"
          key="prisColis"
        />

        <Column
          align="center"
          title="Actions"
          dataIndex="Actions"
          key="Actions"
          render={(text, pkg, index) => {
            return (
              <div className="">
                <i onClick={()=>{setPkg(pkg)
                setModalVisible(true)
                }} className="feather icon-eye m-1"></i>
                {/* <i className="feather icon-edit m-1"></i> */}
                <span role="button" ><i  onClick={()=>deletePackage(pkg)} className="feather icon-trash-2 m-1"></i></span>
              </div>
            );
          }}
        />
      </Table>
    </div>
  )
}
