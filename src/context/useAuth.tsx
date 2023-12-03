import React, { Children, createContext, useReducer } from "react";

// user interface
export interface User {
  id: String;
  firstName: String;
  lastName: String;
  email: String;
}

// user object
export const initialState: User = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
};

// auth reducer

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "Login":
      return {
        userState: action.payload,
      };
    case "logout":
      return initialState;
    default:
      return state;
  }
};

// user context
export const AuthContext = createContext({
  initialState,
  dispatch: (e: any) => undefined,
});

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
