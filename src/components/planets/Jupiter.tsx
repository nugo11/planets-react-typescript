import Planets from "../Planet";
import Header from "../header";

export default function Jupiter() {
  return (
    <>
      <Header />
      <Planets
        name="JUPITER"
        galaxy="Andromeda-V"
        diameter={89742}
        dayLength="241 HOUR"
        avgTemp="-70C to -30C"
        climate="Gas"
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/e/e1/Jupiter_%28transparent%29.png"
      />
    </>
  );
}
