import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import BgImg from "@components/layout/background-image/BgImg";

const Home = lazy(() => import("@pages/home/Home"));
const News = lazy(() => import("@pages/news/News"));
const Grounds = lazy(() => import("@pages/grounds/Grounds"));
const Economy = lazy(() => import("@pages/grounds/economy/Economy"));
const Leveling = lazy(() => import("@pages/grounds/leveling/Leveling"));
const Composition = lazy(() => import("@pages/composition/Composition"));
const TeamBuilder = lazy(() => import("@pages/team-builder/TeamBuilder"));
const Privacy = lazy(() => import("@pages/info/Privacy"));
const Statute = lazy(() => import("@pages/info/Statute"));
const AboutUs = lazy(() => import("@pages/info/AboutUs"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Ładowanie...</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <PageWithBg>
              <Home />
            </PageWithBg>
          }
        />
        <Route
          path="/news"
          element={
            <PageWrapper>
              <News />
            </PageWrapper>
          }
        />
        <Route
          path="/grounds"
          element={
            <PageWithBg>
              <Grounds />
            </PageWithBg>
          }
        />
        <Route
          path="/grounds/economy"
          element={
            <PageWithBg>
              <Economy />
            </PageWithBg>
          }
        />
        <Route
          path="/grounds/leveling"
          element={
            <PageWithBg>
              <Leveling />
            </PageWithBg>
          }
        />
        <Route
          path="/comps"
          element={
            <PageWithBg>
              <Composition />
            </PageWithBg>
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
          path="/p-privacy"
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

const PageWithBg = ({ children }) => (
  <>
    <BgImg />
    <PageWrapper>{children}</PageWrapper>
  </>
);

export default AppRoutes;
