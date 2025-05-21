import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { Backdrop } from "@components/layout";

import {
  Home,
  Patchnotes,
  Grounds,
  GroundsEconomy,
  GroundsLeveling,
  Compositions,
  AboutUs,
  Privacy,
  Statute,
  TeamBuilder,
} from "@pages";

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <BackdropWrapper>
              <Home />
            </BackdropWrapper>
          }
        />
        <Route
          path="/patchnotes"
          element={
            <PageWrapper>
              <Patchnotes />
            </PageWrapper>
          }
        />
        <Route
          path="/grounds"
          element={
            <BackdropWrapper>
              <Grounds />
            </BackdropWrapper>
          }
        />
        <Route
          path="/grounds/economy"
          element={
            <BackdropWrapper>
              <GroundsEconomy />
            </BackdropWrapper>
          }
        />
        <Route
          path="/grounds/leveling"
          element={
            <BackdropWrapper>
              <GroundsLeveling />
            </BackdropWrapper>
          }
        />
        <Route
          path="/comps"
          element={
            <BackdropWrapper>
              <Compositions />
            </BackdropWrapper>
          }
        />
        <Route
          path="/team-builder"
          element={
            <DndProvider backend={HTML5Backend}>
              <PageWrapper>
                <TeamBuilder />
              </PageWrapper>
            </DndProvider>
          }
        />
        <Route
          path="/privacy"
          element={
            <PageWrapper>
              <Privacy />
            </PageWrapper>
          }
        />
        <Route
          path="/statute"
          element={
            <PageWrapper>
              <Statute />
            </PageWrapper>
          }
        />
        <Route
          path="/about-us"
          element={
            <PageWrapper>
              <AboutUs />
            </PageWrapper>
          }
        />
      </Routes>
    </Suspense>
  );
};

const PageWrapper = ({ children }) => (
  <div className="container">{children}</div>
);

const BackdropWrapper = ({ children }) => (
  <>
    <Backdrop />
    <PageWrapper>{children}</PageWrapper>
  </>
);

export default AppRoutes;
