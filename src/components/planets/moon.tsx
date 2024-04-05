import Planets from "../Planet";
import Header from "../header";

export default function Moon() {
  return (
    <>
      <Header />
      <Planets
        name="MOON"
        galaxy="Andromeda-V"
        diameter={4742}
        dayLength="36 HOUR"
        avgTemp="-20C to -10C"
        climate="Space"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/3/33/Lune_ico.png"
      />
    </>
  );
}
