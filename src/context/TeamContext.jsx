import { createContext, useContext } from "react";

export const TeamContext = createContext();

export const useTeamContext = () => useContext(TeamContext);
