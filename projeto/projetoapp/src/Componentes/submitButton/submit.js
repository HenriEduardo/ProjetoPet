import React from "react";

function SubmitButton({text}){
    return(
        <div>
            <button className="btn btn-primary mt-3">{text}</button>
        </div>
    )
}

export default SubmitButton;