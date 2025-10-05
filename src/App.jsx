import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import Background from "./components/Background";
import { Toaster } from "./components/ui/toaster";
import { useHexStops } from "./hooks/useHexStops";

function App() {
  const stops = useHexStops();

  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        <Background
          colorStops={stops}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
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
