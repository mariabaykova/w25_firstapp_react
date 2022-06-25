import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities (just to test react-google-charts lib)",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
       My first react app
      </header>
      <main>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
      </main>
    </div>
  );
}

export default App;
