import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchContact = ({queryKey}) => { 
    const contactId = queryKey[1]
  return axios.get(`http://localhost:4000/contacts/${contactId}`);
};

export const useContactData = (contactId) => {
  return useQuery( {queryKey:["contact", contactId], queryFn:fetchContact})
};

