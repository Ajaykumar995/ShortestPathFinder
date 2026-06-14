import "./App.css";
// import Navbar from "./Navbar";
import MapView from "./MapView";
import { useEffect, useState } from "react";

function App() {
  const [landmarks, setLandmarks] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/api/landmarks")
      .then((res) => res.json())
      .then((data) => setLandmarks(data));
  }, []);

  const handleSwap = () => {
    const temp = source;
    setSource(destination);
    setDestination(temp);
    setResult(null);
  };

  const findRoute = async () => {
    if (!source || !destination) {
      alert("Please select source and destination");
      return;
    }
    if (source === destination) {
      alert("Source and destination cannot be the same");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/routes/find", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source, destination }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      alert("Failed to fetch route. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  const getTimelineType = (index, total) => {
    if (index === 0) return "start";
    if (index === total - 1) return "end";
    return "mid";
  };

  const getDotLabel = (index, total) => {
    if (index === 0) return "A";
    if (index === total - 1) return "B";
    return index;
  };

  return (
    <div className="app">
      {/* <Navbar /> */}

      {/* ── Hero ── */}
      <div className="hero">
        <div className="hero-tag">Live Route Optimization</div>
        <h1>
          Smart City<br />
          <span>Navigation</span>
        </h1>
        <p>
          Find the shortest path between any two landmarks
          using Dijkstra's algorithm in real time.
        </p>
      </div>

      {/* ── Stats Row ── */}
      <div className="stats-row">
        <div className="stat-chip">
          <span className="stat-dot" style={{ background: "#4ade80" }}></span>
          <span><strong>{landmarks.length}</strong> Landmarks</span>
        </div>
        <div className="stat-chip">
          <span className="stat-dot" style={{ background: "#38bdf8" }}></span>
          <span><strong>Dijkstra's</strong> Algorithm</span>
        </div>
        <div className="stat-chip">
          <span className="stat-dot" style={{ background: "#a78bfa" }}></span>
          <span><strong>Real-time</strong> Path Finding</span>
        </div>
      </div>

      {/* ── Route Card ── */}
      <div className="route-card">
        <div className="card-header">
          <div className="card-header-icon">🧭</div>
          <div>
            <h2>Plan Your Route</h2>
            <p>Select start and end points</p>
          </div>
        </div>

        <div className="fields-grid">
          <div className="field">
            <label>
              <span className="field-dot green"></span>
              Source
            </label>
            <select value={source} onChange={(e) => { setSource(e.target.value); setResult(null); }}>
              <option value="">Select origin</option>
              {landmarks.map((lm) => (
                <option key={lm._id} value={lm.name}>{lm.name}</option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>
              <span className="field-dot red"></span>
              Destination
            </label>
            <select value={destination} onChange={(e) => { setDestination(e.target.value); setResult(null); }}>
              <option value="">Select destination</option>
              {landmarks.map((lm) => (
                <option key={lm._id} value={lm.name}>{lm.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="divider-swap">
          <button className="swap-btn" onClick={handleSwap} title="Swap source and destination">
            ⇅
          </button>
        </div>

        <button className="find-btn" onClick={findRoute} disabled={loading}>
          {loading ? "Finding Route..." : "⚡ Find Optimal Route"}
        </button>
      </div>

      {/* ── Result ── */}
      {result && (
        <div className="result-layout">

          {/* Route Panel */}
          <div className="route-panel">
            <div className="route-panel-header">
              <h2><span>🛣️</span> Route</h2>
              <div className="dist-badge">
                📏 {result.totalDistance} km
              </div>
            </div>

            <div className="timeline">
              {result.path.map((place, index) => {
                const type = getTimelineType(index, result.path.length);
                const label = getDotLabel(index, result.path.length);
                return (
                  <div key={index} className="timeline-item">
                    <div className="timeline-left">
                      <div className={`timeline-dot ${type}`}>{label}</div>
                      {index !== result.path.length - 1 && (
                        <div className="timeline-connector" />
                      )}
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-name">{place}</div>
                      <div className="timeline-label">
                        {type === "start" ? "Starting point" : type === "end" ? "Destination" : "Via"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="map-wrapper">
            <div className="map-overlay-top">
              <span className="live-dot"></span>
              Live Map View
            </div>
            <MapView landmarks={landmarks} result={result} />
          </div>

        </div>
      )}
    </div>
  );
}

export default App;