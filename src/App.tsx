import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import Background from "./components/Background.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { useHexStops } from "./hooks/useHexStops.ts";

function App() {
  const stops = useHexStops();

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        <Background colorStops={stops} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
