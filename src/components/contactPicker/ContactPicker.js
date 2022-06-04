import React from "react";

export const ContactPicker = ({ name, contacts, onChange}) => {


  return (
    <select name={name} onChange={onChange}>
      <option value={""} key={-1} seletced="selected">
        No Contact Selected
      </option>

      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
            {contact}
          </option>
        )
      })}

    </select>
  );
};
