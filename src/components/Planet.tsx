interface props {
  name: string;
  galaxy: string;
  diameter: number;
  dayLength: string;
  avgTemp: string;
  climate: string;
  imgUrl: string
}

export default function Planets(props: props) {
  return (
    <>
      <div className="planets">
        <h1>{props.name}</h1>
        <div className="info">
          <div>
            <h2>GALAXY</h2>
            <p>{props.galaxy}</p>
          </div>
          <div>
            <h2>Diameter</h2>
            <p>{props.diameter} km</p>
          </div>
          <div>
            <h2>Day Length</h2>
            <p>{props.dayLength}</p>
          </div>
          <div>
            <h2>Avg Temperature</h2>
            <p>{props.avgTemp}</p>
          </div>
          <div>
            <h2>Climate</h2>
            <p>{props.climate}</p>
          </div>
        </div>
        <img src={props.imgUrl} alt={props.name} />
      </div>
    </>
  );
}
