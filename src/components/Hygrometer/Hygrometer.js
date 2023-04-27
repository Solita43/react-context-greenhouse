import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from "react";

function Hygrometer() {
  const {humidity, setHumidity} = useClimate();
  const [DHum, setDHum] = useState(humidity)


  useEffect(() => {
    const timer = setTimeout(() => {
      if (humidity === DHum + 1) setDHum((prevHum) => prevHum + 1);
      else if (humidity === DHum - 1) setDHum((prevHum) => prevHum - 1);
      else if (humidity > DHum) setDHum((prevHum) => prevHum + 2);
      else if (humidity < DHum) setDHum((prevHum) => prevHum - 2);
    }, 1000);
    return () => clearTimeout(timer);
  }, [DHum, humidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">{`Actual Humidity: ${DHum}%`}</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => setHumidity(val)}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;