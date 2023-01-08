import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useContactsData, useDeleteContact } from "../../hooks/contacts";

export const Home = () => {
  const onSuccess = (res) => {
    console.log("Perform side affect after data fetching");
  };
  const onError = () => {
    console.log("Perform side affect after encountering error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useContactsData(onSuccess, onError);
  //
  const { mutate: deleteMethod } = useDeleteContact();

  const deleteContact = (id) => {
    deleteMethod(id);
  };

  //   cachetime : default time 5min
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <button onClick={refetch}>Get Contact</button>
      {data?.data.map((contact) => {
        return (
          <div key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.name}</Link>
            <button
              onClick={() => {
                deleteContact(contact.id);
              }}
              style={{ marginLeft: "20px" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};
