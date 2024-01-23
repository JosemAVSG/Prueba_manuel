import MapContainer from "../components/Map";

const Mapview = () => {
  const API_KEY =
    "pk.eyJ1IjoibWFuYWJsIiwiYSI6ImNscDNhYndybDAyNGUyc3FsanczemlnNTEifQ.RgfileEGXN3aAoP-dAQd3A";

  return (
    <div className="map">
      <MapContainer Token={API_KEY}></MapContainer>
    </div>
  );
};

export default Mapview;
