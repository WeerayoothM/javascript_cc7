import React, { Component } from "react";

export default class Input extends Component {
    getClassCSS = () => {
        let cssClass = "Input InputElement";
        if (this.props.error.status && this.props.error.isTouched) {
            cssClass += " Invalid"
        }
        return cssClass
    }

    render() {
        const { value, onChangeInput, name, placeholder, type, error } = this.props
        return (
            <>
                <input type={type} onChange={onChangeInput} value={value} className={this.getClassCSS()} name={name} placeholder={placeholder} />
                <p className="ErrorMessage">{error.message}</p>
            </>
        )

    }
}
