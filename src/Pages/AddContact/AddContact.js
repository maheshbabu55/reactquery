import React, { useState } from "react";
import { useAddContactsData } from "../../hooks/contacts";

const AddContact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const { mutate } = useAddContactsData();

  const handleAddContact = () => {
    const data = { name, number };
    mutate(data);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleAddContact}>Add Contact</button>
    </div>
  );
};

export default AddContact;
