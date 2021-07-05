import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateStudent extends Component {

  constructor(props) {
    super(props)

    // onchange functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentUSN = this.onChangeStudentUSN.bind(this);
    this.onChangeStudentDOB = this.onChangeStudentDOB.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentPhone = this.onChangeStudentPhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // state
    this.state = {
      name: '',
      usn: '',
      dob: '',
      email: '',
      phone: ''
    }
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentUSN(e) {
    this.setState({ usn: e.target.value })
  }

  onChangeStudentDOB(e) {
    this.setState({ dob: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentPhone(e) {
    this.setState({ phone: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      usn: this.state.usn,
      dob: this.state.dob,
      email: this.state.email,
      phone: this.state.phone
    };

    axios.post('https://calm-reaches-28607.herokuapp.com/students/create-student', studentObject)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      usn: '',
      dob: '',
      email: '',
      phone: ''
    });

    // open list 
    this.props.history.push('/student-list')
  }

  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>
        <Form.Group controlId="USN">
          <Form.Label>USN</Form.Label>
          <Form.Control type="text" value={this.state.usn} onChange={this.onChangeStudentUSN} />
        </Form.Group>
        <Form.Group controlId="DOB">
          <Form.Label>DOB</Form.Label>
          <Form.Control type="date" value={this.state.dob} onChange={this.onChangeStudentDOB} />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>
        <Form.Group controlId="Phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" value={this.state.phone} onChange={this.onChangeStudentPhone} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>);
  }
}
