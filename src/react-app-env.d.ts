/// <reference types="react-scripts" />

type Weather = {
    id: number,
    main: string,
    description: string,
    icon: string
};

interface Weather_data {
    weather: Weather[],
    name: string
}