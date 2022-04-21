import React, { useState, createContext } from "react";
import { getCurrentUserType } from "../../modules/UserProfileManager";

// The context is imported and used by individual components that need data
export const UserTypeContext = createContext();

// This component establishes what data can be used.
export const UserTypeProvider = (props) => {
  const [currentUserType, setCurrentUserType] = useState(0);

  const updateCurrentUserType = () => {
    getCurrentUserType().then((data) => setCurrentUserType(data.userType));
  };

  return (
    <UserTypeContext.Provider
      value={{
        currentUserType,
        updateCurrentUserType,
      }}
    >
      {props.children}
    </UserTypeContext.Provider>
  );
};
