import React from "react";


const searchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="query"
      value={value}
      className="form-control mb-3"
      placeholder="search..."
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  )
}

export default searchBox;