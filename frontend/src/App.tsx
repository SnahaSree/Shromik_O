
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/layout/Layout";
import PageTransition from "./components/common/PageTransition";
import PlaceholderPage from "./pages/PlaceholderPage";

import Home from "./pages/public/Home";
import Problem from "./pages/public/Problem";
import Solution from "./pages/public/Solution";
import Impact from "./pages/public/Impact";
import Team from "./pages/public/Team";
import Roadmap from "./pages/public/Roadmap";
import Contact from "./pages/public/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>

          <Route
            path="/"
            element={<PageTransition><Home /></PageTransition>}
          />

          <Route
            path="/problem"
            element={<PageTransition><Problem /></PageTransition>}
          />

          <Route
            path="/solution"
            element={<PageTransition><Solution /></PageTransition>}
          />

          <Route
            path="/impact"
            element={<PageTransition><Impact /></PageTransition>}
          />

          <Route
            path="/team"
            element={<PageTransition><Team /></PageTransition>}
          />

          <Route
            path="/roadmap"
            element={<PageTransition><Roadmap /></PageTransition>}
          />

          <Route
            path="/contact"
            element={<PageTransition><Contact /></PageTransition>}
          />

          <Route
            path="/login"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Welcome Back"
                  subtitle="Your Shromik account login will be available soon."
                />
              </PageTransition>
            }
          />

          <Route
            path="/signup"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Join Shromik"
                  subtitle="Create your worker or contractor account."
                />
              </PageTransition>
            }
          />

          <Route
            path="*"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="404 - Page Not Found"
                  subtitle="The page you are looking for does not exist."
                />
              </PageTransition>
            }
          />

        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AnimatedRoutes />
      </LanguageProvider>
    </BrowserRouter>
  );
}
