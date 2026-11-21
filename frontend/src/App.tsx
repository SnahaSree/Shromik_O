
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { LanguageProvider } from "./context/LanguageContext";
import Layout from "./components/layout/Layout";
import PageTransition from "./components/common/PageTransition";
import PlaceholderPage from "./pages/PlaceholderPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Welcome to Shromik"
                  subtitle="A better future for Bangladesh's construction workforce starts here."
                />
              </PageTransition>
            }
          />

          <Route
            path="/problem"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="The Problem"
                  subtitle="Understanding the challenges facing construction workers in Bangladesh."
                />
              </PageTransition>
            }
          />

          <Route
            path="/solution"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Our Solution"
                  subtitle="Connecting skilled workers with trusted contractors."
                />
              </PageTransition>
            }
          />

          <Route
            path="/impact"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Our Impact"
                  subtitle="Building a measurable impact on Bangladesh's workforce."
                />
              </PageTransition>
            }
          />

          <Route
            path="/team"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Meet Our Team"
                  subtitle="The people working to build a better workforce ecosystem."
                />
              </PageTransition>
            }
          />

          <Route
            path="/roadmap"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Our Roadmap"
                  subtitle="Our journey toward transforming construction employment."
                />
              </PageTransition>
            }
          />

          <Route
            path="/contact"
            element={
              <PageTransition>
                <PlaceholderPage
                  title="Contact Shromik"
                  subtitle="Let's work together to build a better future."
                />
              </PageTransition>
            }
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
