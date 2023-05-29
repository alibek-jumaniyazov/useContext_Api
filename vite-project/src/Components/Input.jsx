import React, { forwardRef } from "react";

const Input = forwardRef(({ type, placeholder }, ref) => (
    <div className="inputs">
        <input  className="inputCompanent" type={type} placeholder={placeholder} ref={ref} />
    </div>
)
);

export default Input