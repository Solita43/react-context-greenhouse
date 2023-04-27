import ReactSlider from "react-slider";
import './Thermometer.css';
import {useClimate} from '../../context/ClimateContext'
import { useEffect, useState } from "react";

function Thermometer() {
  const {temperature, setTemperature} = useClimate()
  const [ DTemp, setDTemp ] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {})
  }, []);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {DTemp}°F</div>
      <ReactSlider
        value={DTemp}
        onAfterChange={(val) => setTemperature(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
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

export default Thermometer;
