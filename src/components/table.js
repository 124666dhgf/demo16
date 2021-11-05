import React from 'react';
import'./table.css';
const TableHeader=()=>{
    return(
        <thead className="Table-header">
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody=()=>{
    return(
        <tbody className="Table-body">
            <tr>
                <td>Anna</td>
                <td>It professional</td>
            </tr>
            <tr>
                <td>Jane</td>
                <td>Writer</td>
            </tr>
            <tr>
                <td>Janani</td>
                <td>Dancer</td>
            </tr>
            <tr>
                <td>Davis</td>
                <td>Security Analyst</td>
            </tr>
        </tbody>
    )
}

 class Table extends React.Component{
     render(){
         return(
             <table className="Table">
                 <TableHeader />
                 <TableBody />
             </table>
         )
     }
 }
export default Table;