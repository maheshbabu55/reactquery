import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchContacts = () => {
  return axios.get("http://localhost:4000/contacts");
};

const addContact = (contact) => {
  return axios.post("http://localhost:4000/contacts", contact);
};

const deleteContact = (id) => {
  return axios.delete(`http://localhost:4000/contacts/${id}`);
};

export const useContactsData = (onSuccess, onError) => {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: fetchContacts,
    onSuccess,
    onError
  });
};

// before invalidating the post query

// export const useAddSuperHeroesData  = () =>{
//     return useMutation(addSuperHero)
// }

export const useAddContactsData = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addContact,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      //   to invalidate query it is wasting  one server update
      //   queryClient.setQueryData("contacts", (oldQueryData) => {
      //     return {
      //       ...oldQueryData,
      //       data: [...oldQueryData.data, data.data],
      //     };
      //   });
    },
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteContact,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
};
