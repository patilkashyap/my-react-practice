import React, { useState } from "react";

function Navigation({ onButtonClick, allNames }) {
  return (
    <div className="bg-gray-300 text-center my-2 flex justify-evenly ">
      {allNames.map((name) => (
        <button
          key={name.id}
          onClick={() => onButtonClick({ id: name.id, name: name.name })}
        >
          {name.name}
        </button>
      ))}
    </div>
  );
}

export default Navigation;
