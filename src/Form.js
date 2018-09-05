import React, { Component } from 'react';
import Field from "./Field";
import Button from "./Button";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    }

updateField(field, value) {

}

    render() {
      return (
        <div>
        <Field
        onChange={(event) => this.updateField('name', event.target.value)}
        value{this.state.name} />
        <Field
        onChange={(event) => this.updateField('email', event.target.value)}
        value{this.state.email} />
        <Field
        onChange={(event) => this.updateField('message', event.target.value)}
        textarea
        value{this.state.message} />
        <Button formValues={this.state} email="a.pykhantsev@gmail.com" />
      )
    }
  }
}
