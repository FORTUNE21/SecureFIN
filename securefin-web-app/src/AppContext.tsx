import { createContext, useContext } from "react";

export const AppContext = createContext({
  token: null || "",
  user: {
    serviceName: "",
    description: "",
  },
  updateUser: (data: any) => {},
  updateToken: (token: any) => {},
});

export const useAppContext = () => {
  const { updateToken, updateUser, token, user } = useContext(AppContext);

  return {
    updateToken,
    updateUser,
    token,
    user,
  };
};
