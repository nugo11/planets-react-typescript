import "./App.css";
import Planets from "./components/Planet";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Planets
        name="EARTH"
        galaxy="Andromeda-IV"
        diameter={12742}
        dayLength="24 HOUR"
        avgTemp="0C to 59C"
        climate="Polar"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1200px-Earth_Western_Hemisphere_transparent_background.png"
      />
    </>
  );
}

export default App;
