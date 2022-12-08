import React from "react";
import styles from "./StylesInput.css";

function Input({type, text, name, placeholder, handleChange, value}){
    return(
        <div className={styles.form_control}>
            <div className="forms form-group mt-3">
                <label className="form-label" htmlFor={name}>{text}</label>
                <input className="form-control"
                    type={type} 
                    name={name} 
                    id={name} 
                    placeholder={placeholder} 
                    onChange={handleChange}
                    value={value}
                />
            </div>
        </div>
    )
}

export default Input;