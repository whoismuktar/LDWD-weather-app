import "./App.scss";
import ConditionIcon from "./components/ConditionIcon";
import Searchbar from "./components/Searchbar";
import Sidebar from "./components/Sidebar";
import HorizontalWeatherCard from "./components/HorizontalWeatherCard";
import VerticalWeatherCard from "./components/VerticalWeatherCard";
import WeatherUnitSummary from "./components/WeatherUnitSummary";

const currentWeather = {
  city: "Madrid",
  chanceOfRain: 0,
  temperature: 31,
  condition: "sunny",
};

const todaysForecast = [];

const HeroHighlight = () => {
  return (
    <div className="hero-highlight">
      <div className="meta-stat">
        <div className="meta-stat__content">
          <div className="meta-stat__city">{currentWeather.city}</div>
          <div className="meta-stat__chanceOfRain">
            Chance of rain: {currentWeather.chanceOfRain}%
          </div>
        </div>

        <div className="meta-stat__temperature">
          <span>{currentWeather.temperature}</span>
          <span className="degree-icon">o</span>
        </div>
      </div>

      <ConditionIcon
        condition={currentWeather.condition}
        size={240}
        color="yellow"
      />
    </div>
  );
};

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <main className="main-content">
        <div className="content-wrapper">
          <div className="content-body">
            <Searchbar />

            <HeroHighlight />

            <HorizontalWeatherCard
              title="Today's Forecast"
              weather={todaysForecast}
            />

            <WeatherUnitSummary title="Air Conditions" btnTitle="See More" />
          </div>
          
          <div className="content-summary">
            <VerticalWeatherCard title="7-Day Forecast" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
