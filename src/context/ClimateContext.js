import React, { useContext } from 'react';

// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

export const ClimateContext = React.createContext();

export const useClimate = () => React.useContext(ClimateContext);

function ClimateProvider(props) {
    const [temperature, setTemperature] = React.useState(50);

    return (
        <ClimateContext.Provider value={{temperature, setTemperature}}>
            {props.children}
        </ClimateContext.Provider>
    );

};

export default ClimateProvider; // Could also add export default in front of line 10.

// export {ClimateContext, useClimate};