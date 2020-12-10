import React, { Component } from "react";
import Input from "../Input/Input";

export default class RegisterForm extends Component {
  state = {
    formData: {
      name: {
        value: "",
        validator: {
          minLength: 3,
          maxLength: 6,
          required: true,
        },
        error: { status: true, message: "", isTouched: false }
      },
      phonenumber: {
        value: "",
        validator: {
          minLength: 10,
          maxLength: 10,
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
      email: {
        value: "",
        validator: {
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
      password: {
        value: "",
        validator: {
          minLength: 6,
          maxLength: 24,
          required: true
        },
        error: { status: true, message: "", isTouched: false }
      },
    },
    isFormValid: false,
  }
  onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const formUpdate = { ...this.state.formData };

    formUpdate[fieldName].value = fieldValue;
    formUpdate[fieldName].error.isTouched = true;
    // console.log("fieldName", fieldName, "fieldValue", fieldValue)

    let { isValid, message } = this.checkValue(fieldValue, formUpdate[fieldName].validator);
    formUpdate[fieldName].error.status = !isValid;
    formUpdate[fieldName].error.message = message;

    let newIsFormValid = true;
    for (let key in formUpdate) {
      if (formUpdate[key].validator.required) {
        newIsFormValid = !formUpdate[key].error.status && newIsFormValid;
      }
    }

    this.setState({
      formData: formUpdate,
      isFormValid: newIsFormValid
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, phonenumber } = this.state.formData;
    const result = {
      name: name.value,
      email: email.value,
      phonenumber: phonenumber.value,
      password: password.value,
    }
    console.log(result)
  }

  // function สำหรับ check ความถูกต้องของ value เทียบกับ validator
  checkValue = (value, rules) => {
    let isValid = true;
    let trimmedValue = value.trim();
    let message = "";
    if (rules.required && trimmedValue.length === 0) {
      isValid = false;
      message = "กรุณากรอกช่องนี้";
    }
    if (rules.maxLength && trimmedValue.length > rules.maxLength) {
      isValid = false;
      message = `ช่องนี้ความยาวต้องไม่เกิน ${rules.maxLength} ตัว`
    }
    if (rules.minLength && trimmedValue.length < rules.minLength) {
      isValid = false;
      message = `ช่องนี้ความยาวต้องอย่างน้อย ${rules.minLength} ตัว`
    }
    return { isValid, message }
  }

  render() {
    const { name, email, password, phonenumber } = this.state.formData;
    return (
      <div className="RegisterForm">
        <h1 style={{ color: 'cornflowerblue' }}>{"Register Form"}</h1>
        <form onSubmit={this.onSubmit}>
          <Input onChangeInput={this.onChangeInput} value={name.value} name="name" placeholder="ชื่อ-นามสกุล" error={name.error} />
          <Input onChangeInput={this.onChangeInput} value={phonenumber.value} name="phonenumber" placeholder="เบอร์โทรศัพท์" error={phonenumber.error} />
          <Input onChangeInput={this.onChangeInput} value={email.value} name="email" placeholder="อีเมล์" error={email.error} />
          <Input type="password" onChangeInput={this.onChangeInput} value={password.value} name="password" placeholder="รหัสผ่าน" error={password.error} />

          <button disabled={!this.state.isFormValid} htmlFor="submit" className="Button" type="submit">Register</button>
        </form>
      </div>
    );
  }
}
