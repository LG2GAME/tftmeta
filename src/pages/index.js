import { lazy } from "react";

export const Home = lazy(() => import("./home/Home"));
export const Patchnotes = lazy(() => import("./patchnotes/Patchnotes"));
export const Grounds = lazy(() => import("./grounds/Grounds"));
export const GroundsEconomy = lazy(() => import("./grounds/economy/Economy"));
export const GroundsLeveling = lazy(() =>
  import("./grounds/leveling/Leveling")
);
export const Compositions = lazy(() => import("./compositions/Compositions"));
export const AboutUs = lazy(() => import("./legal/AboutUs"));
export const Privacy = lazy(() => import("./legal/Privacy"));
export const Statute = lazy(() => import("./legal/Statute"));
export const TeamBuilder = lazy(() => import("./team-builder/TeamBuilder"));
