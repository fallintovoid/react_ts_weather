import React from "react";

import './WeatherInfo.scss';

import GlobalSvgSelector from "../../../../images/GlobalSvgSelector";

export const WeatherInfo: React.FC = () => {
    return (
        <div className="weather">
            <div className="weather__block">
                <div className="weather__block__temp">
                    <div className="weather__block__temp--icon">
                        <GlobalSvgSelector 
                            id={`termometr`} 
                        />
                    </div>
                    <div className="weather__block__temp--name">
                        Some info
                    </div>
                    <div className="weather__block__temp--nums">
                        20° - ощущается как 17°
                    </div>
                </div>
                <div className="weather__block__presure">
                    <div className="weather__block__presure--icon">
                        <GlobalSvgSelector 
                            id={`presure`} 
                        />                        
                    </div>
                    <div className="weather__block__presure--name">
                        Some info
                    </div>
                    <div className="weather__block__presure--nums">
                        765 мм ртутного столба - нормальное
                    </div>
                </div>
            </div>
        </div>
    )
}