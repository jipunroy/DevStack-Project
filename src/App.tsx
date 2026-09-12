import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Technologies />
      </main>
    </>
  );
}

export default App;