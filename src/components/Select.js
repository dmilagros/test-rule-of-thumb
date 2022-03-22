import React from "react";
import '../styles/components/select.css'

const Select = ({ value, onChange }) => {
  return (
    <select className="select" value={value} onChange={onChange}>
      <option value="list">List</option>
      <option value="grid">Grid</option>
    </select>
  );
};

export default Select;
