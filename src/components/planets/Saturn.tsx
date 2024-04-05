import Planets from "../Planet";
import Header from "../header";

export default function Saturn() {
  return (
    <>
      <Header />
      <Planets
        name="SATURN"
        galaxy="Andromeda-V"
        diameter={49742}
        dayLength="135 HOUR"
        avgTemp="-60C to -20C"
        climate="Gas"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Saturnx.png/1200px-Saturnx.png"
      />
    </>
  );
}
