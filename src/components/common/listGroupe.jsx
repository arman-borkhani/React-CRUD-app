import React from "react";

const ListGroup = props => {
  const { items, textProperty, selectedItem, onItemsSelect } = props;

  return (
    <ul className="list-group pt-3">
      {items.map(genre => (
        <li
          key={genre[textProperty]}
          className={genre === selectedItem ? "list-group-item active" : "list-group-item"}
          onClick={() => onItemsSelect(genre)}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
}

export default ListGroup;