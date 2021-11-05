import React from 'react';
import './mytable.css';
const TableHeader = () => {
    return (
      <thead className="Table-header" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>City</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.city}</td>
        </tr>
      )
    })
  
    return <tbody className="Table-body">{rows}</tbody>
  }

  class Table extends React.Component {
    
    render() {
      const {characterData} = this.props
      return (
        <table className="Table"> 
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      )
    }
  }
  class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Krishna',
          job: 'Software Engineer',
          city:'Kochi'
        },
        {
          name: 'Minnu',
          job: 'Artist',
          city:'Ernakulam'
        },
        {
          name: 'Deepa',
          job: 'HR',
          city:'Banglore'
        },
        {
          name: 'Amaal',
          job: 'Manager',
          city:'Trivandrum'
        },
        {
          name: 'Vijay',
          job: 'Analyst',
          city:'Chennai'
        },
        {
          name: 'Chandini',
          job: 'System Engineer',
          city:'Hyderabad'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;