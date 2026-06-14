// // import {
// //   MapContainer,
// //   TileLayer,
// //   Marker,
// //   Polyline,
// //   Popup,
// //   useMap,
// // } from "react-leaflet";

// // import "leaflet/dist/leaflet.css";
// // import "leaflet-defaulticon-compatibility";
// // import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// // import L from "leaflet";

// // function FitBounds({ coordinates }) {
// //   const map = useMap();

// //   if (coordinates.length > 1) {
// //     map.fitBounds(coordinates, {
// //       padding: [50, 50],
// //     });
// //   }

// //   return null;
// // }

// // const sourceIcon = new L.DivIcon({
// //   html: `<div style="
// //     background:green;
// //     width:20px;
// //     height:20px;
// //     border-radius:50%;
// //     border:3px solid white;
// //   "></div>`,
// //   className: "",
// // });

// // const middleIcon = new L.DivIcon({
// //   html: `<div style="
// //     background:gold;
// //     width:18px;
// //     height:18px;
// //     border-radius:50%;
// //     border:3px solid white;
// //   "></div>`,
// //   className: "",
// // });

// // const destinationIcon = new L.DivIcon({
// //   html: `<div style="
// //     background:red;
// //     width:20px;
// //     height:20px;
// //     border-radius:50%;
// //     border:3px solid white;
// //   "></div>`,
// //   className: "",
// // });

// // function MapView({ landmarks, result }) {
// //   const routeLandmarks = result.path
// //     .map((place) =>
// //       landmarks.find((l) => l.name === place)
// //     )
// //     .filter(Boolean);

// //   const routeCoordinates = routeLandmarks.map(
// //     (landmark) => [
// //       landmark.coordinates.latitude,
// //       landmark.coordinates.longitude,
// //     ]
// //   );

// //   return (
// //     <div className="map-wrapper">
// //       <MapContainer
// //         center={routeCoordinates[0]}
// //         zoom={13}
// //         className="leaflet-container"
// //       >
// //         <TileLayer
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         />

// //         <FitBounds coordinates={routeCoordinates} />

// //         {routeLandmarks.map((landmark, index) => {
// //           let icon = middleIcon;

// //           if (index === 0) {
// //             icon = sourceIcon;
// //           }

// //           if (index === routeLandmarks.length - 1) {
// //             icon = destinationIcon;
// //           }

// //           return (
// //             <Marker
// //               key={landmark._id}
// //               position={[
// //                 landmark.coordinates.latitude,
// //                 landmark.coordinates.longitude,
// //               ]}
// //               icon={icon}
// //             >
// //               <Popup>
// //                 <strong>{landmark.name}</strong>
// //                 <br />

// //                 {index === 0 && "🟢 Source"}

// //                 {index > 0 &&
// //                   index < routeLandmarks.length - 1 &&
// //                   "🟡 Intermediate"}

// //                 {index === routeLandmarks.length - 1 &&
// //                   "🔴 Destination"}
// //               </Popup>
// //             </Marker>
// //           );
// //         })}

// //         <Polyline
// //           positions={routeCoordinates}
// //           pathOptions={{
// //             color: "#2563eb",
// //             weight: 6,
// //           }}
// //         />
// //       </MapContainer>
// //     </div>
// //   );
// // }

// // export default MapView;


// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   Polyline,
//   Popup,
//   useMap,
// } from "react-leaflet";

// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

// import L from "leaflet";

// function FitBounds({ coordinates }) {
//   const map = useMap();
//   if (coordinates.length > 1) {
//     map.fitBounds(coordinates, { padding: [60, 60] });
//   }
//   return null;
// }

// const makeIcon = (color, size = 20, label = "") =>
//   new L.DivIcon({
//     html: `
//       <div style="
//         position: relative;
//         width: ${size}px;
//         height: ${size}px;
//       ">
//         <div style="
//           width: ${size}px;
//           height: ${size}px;
//           border-radius: 50%;
//           background: ${color};
//           border: 3px solid rgba(255,255,255,0.9);
//           box-shadow: 0 0 0 3px ${color}55, 0 4px 12px rgba(0,0,0,0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 9px;
//           font-weight: 700;
//           color: white;
//           font-family: Inter, sans-serif;
//         ">${label}</div>
//       </div>
//     `,
//     className: "",
//     iconSize: [size, size],
//     iconAnchor: [size / 2, size / 2],
//   });

// const sourceIcon      = makeIcon("#4ade80", 22, "A");
// const destinationIcon = makeIcon("#f87171", 22, "B");
// const middleIcon      = makeIcon("#fbbf24", 16, "");

// function MapView({ landmarks, result }) {
//   const routeLandmarks = result.path
//     .map((place) => landmarks.find((l) => l.name === place))
//     .filter(Boolean);

//   const routeCoordinates = routeLandmarks.map((lm) => [
//     lm.coordinates.latitude,
//     lm.coordinates.longitude,
//   ]);

//   return (
//     <MapContainer
//       center={routeCoordinates[0]}
//       zoom={13}
//       className="leaflet-container"
//       zoomControl={true}
//     >
//       {/* Dark map tiles via CartoDB */}
//       <TileLayer
//         url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
//       />

//       <FitBounds coordinates={routeCoordinates} />

//       {/* Route line — glow effect via two polylines */}
//       <Polyline
//         positions={routeCoordinates}
//         pathOptions={{ color: "#1d4ed8", weight: 12, opacity: 0.25 }}
//       />
//       <Polyline
//         positions={routeCoordinates}
//         pathOptions={{ color: "#38bdf8", weight: 4, opacity: 0.95 }}
//       />

//       {/* Markers */}
//       {routeLandmarks.map((lm, index) => {
//         const isFirst = index === 0;
//         const isLast  = index === routeLandmarks.length - 1;
//         const icon    = isFirst ? sourceIcon : isLast ? destinationIcon : middleIcon;

//         return (
//           <Marker
//             key={lm._id}
//             position={[lm.coordinates.latitude, lm.coordinates.longitude]}
//             icon={icon}
//           >
//             <Popup>
//               <div style={{ fontFamily: "Inter, sans-serif" }}>
//                 <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>
//                   {lm.name}
//                 </div>
//                 <div style={{ fontSize: 11, opacity: 0.7 }}>
//                   {isFirst ? "🟢 Starting point" : isLast ? "🔴 Destination" : "🟡 Via"}
//                 </div>
//               </div>
//             </Popup>
//           </Marker>
//         );
//       })}
//     </MapContainer>
//   );
// }

// export default MapView;

import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import L from "leaflet";

function FitBounds({ coordinates }) {
  const map = useMap();
  if (coordinates.length > 1) {
    map.fitBounds(coordinates, { padding: [60, 60] });
  }
  return null;
}

const makeIcon = (color, size = 20, label = "") =>
  new L.DivIcon({
    html: `
      <div style="
        position: relative;
        width: ${size}px;
        height: ${size}px;
      ">
        <div style="
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: ${color};
          border: 3px solid rgba(255,255,255,0.9);
          box-shadow: 0 0 0 3px ${color}55, 0 4px 12px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          font-weight: 700;
          color: white;
          font-family: Inter, sans-serif;
        ">${label}</div>
      </div>
    `,
    className: "",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });

const sourceIcon      = makeIcon("#4ade80", 22, "A");
const destinationIcon = makeIcon("#f87171", 22, "B");
const middleIcon      = makeIcon("#fbbf24", 16, "");

function MapView({ landmarks, result }) {
  const routeLandmarks = result.path
    .map((place) => landmarks.find((l) => l.name === place))
    .filter(Boolean);

  const routeCoordinates = routeLandmarks.map((lm) => [
    lm.coordinates.latitude,
    lm.coordinates.longitude,
  ]);

  return (
    <MapContainer
      center={routeCoordinates[0]}
      zoom={13}
      className="leaflet-container"
      zoomControl={true}
    >
      {/* Dark map tiles via CartoDB */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />

      <FitBounds coordinates={routeCoordinates} />

      {/* Route line — glow effect via two polylines */}
      <Polyline
        positions={routeCoordinates}
        pathOptions={{ color: "#1d4ed8", weight: 12, opacity: 0.25 }}
      />
      <Polyline
        positions={routeCoordinates}
        pathOptions={{ color: "#38bdf8", weight: 4, opacity: 0.95 }}
      />

      {/* Markers */}
      {routeLandmarks.map((lm, index) => {
        const isFirst = index === 0;
        const isLast  = index === routeLandmarks.length - 1;
        const icon    = isFirst ? sourceIcon : isLast ? destinationIcon : middleIcon;

        return (
          <Marker
            key={lm._id}
            position={[lm.coordinates.latitude, lm.coordinates.longitude]}
            icon={icon}
          >
            <Popup>
              <div style={{ fontFamily: "Inter, sans-serif" }}>
                <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4 }}>
                  {lm.name}
                </div>
                <div style={{ fontSize: 11, opacity: 0.7 }}>
                  {isFirst ? "🟢 Starting point" : isLast ? "🔴 Destination" : "🟡 Via"}
                </div>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default MapView;