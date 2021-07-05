import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';


export default class StudentList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidUpdate() {
    axios.get('https://calm-reaches-28607.herokuapp.com/students/')
      .then(res => {
        this.setState({
          students: res.data.reverse()
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    axios.get('https://calm-reaches-28607.herokuapp.com/students/')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <h3>Student List</h3>
      <h4>Number of students: {this.state.students.length}</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>USN</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}