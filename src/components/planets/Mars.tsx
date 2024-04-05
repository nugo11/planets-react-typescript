import Planets from "../Planet";
import Header from "../header";

export default function Mars() {
  return (
    <>
      <Header />
      <Planets
        name="MARS"
        galaxy="Andromeda-V"
        diameter={9742}
        dayLength="41 HOUR"
        avgTemp="-20C to 0C"
        climate="Polaris"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/18/Mars_Valles_Marineris_d%C3%A9tour%C3%A9.png"
      />
    </>
  );
}
