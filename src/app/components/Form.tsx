import React from "react";

function Form({value, onChange}: {value: number; onChange: (amount: number) => void}) {
  return (
<form className="custom-form">
  <label className="custom-label">
    <span className="custom-label-text">Pesos Argentinos:</span>
    <input
      className="custom-input"
      type="number"
      value={value? value : 0}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </label>
</form>
  );
}

export default Form;
