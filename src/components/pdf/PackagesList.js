// import React from 'react'
// import { Document, Page, Text, View, StyleSheet, Table, TableCell, TableHeader, TableBody } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 20,
//   },
//   tableHeader: {
//     backgroundColor: '#f2f2f2',
//   },
//   tableRow: {
//     borderBottom: 1,
//     borderColor: '#cccccc',
//     flexDirection: 'row',
//   },
//   tableCell: {
//     margin: 5,
//     fontSize: 10,
//   },
// });

// export default function PackagesList(props) {
//   console.log(props.user,props.packages);
//   const data = [
//     { id: 1, name: 'John Doe', age: 30 },
//     { id: 2, name: 'Jane Doe', age: 25 },
//     { id: 3, name: 'Bob Smith', age: 40 },
//   ];
//   return (
//     <Document>
//       <Page size="A4" style={styles.page}>
//         <View>
//           <Text>Table Example</Text>
//           <Table>
//             <TableHeader style={styles.tableHeader}>
//               <TableCell style={styles.tableCell}>ID</TableCell>
//               <TableCell style={styles.tableCell}>Name</TableCell>
//               <TableCell style={styles.tableCell}>Age</TableCell>
//             </TableHeader>
//             <TableBody>
//               {data.map(item => (
//                 <View key={item.id} style={styles.tableRow}>
//                   <TableCell style={styles.tableCell}>{item.id}</TableCell>
//                   <TableCell style={styles.tableCell}>{item.name}</TableCell>
//                   <TableCell style={styles.tableCell}>{item.age}</TableCell>
//                 </View>
//               ))}
//             </TableBody>
//           </Table>
//         </View>
//       </Page>
//     </Document>
//   )
// }
