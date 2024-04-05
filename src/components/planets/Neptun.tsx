import Planets from "../Planet";
import Header from "../header";

export default function Neptun() {
  return (
    <>
      <Header />
      <Planets
        name="NEPTUN"
        galaxy="Andromeda-V"
        diameter={12742}
        dayLength="55 HOUR"
        avgTemp="-90C to -20C"
        climate="Polar"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neptune_cutout.png/1200px-Neptune_cutout.png"
      />
    </>
  );
}
