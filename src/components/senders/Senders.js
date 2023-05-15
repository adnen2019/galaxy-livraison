import { Table } from 'antd';
import React, { useEffect } from 'react'
import { useHistory, withRouter } from "react-router-dom";

const { Column } = Table;

 function Senders(props) {
  const history=useHistory()

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
<Column
          align="center"
          title="Actions"
          dataIndex="Actions"
          key="Actions"
          render={(text, sender, index) => {
            return (
              <div className="">
                <i onClick={()=>{
                  history.push("/admin/senderForm/"+sender.idExpiditeur)
                }} className="feather icon-edit m-1"></i>
              </div>
            );
          }}
        />
      </Table>
    </div>
  )
}
export default withRouter(Senders)