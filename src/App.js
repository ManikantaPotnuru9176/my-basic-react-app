// import logo from './logo.svg';
import './App.css';
import MyBtech from './components/MyBtech';
import MyCollege from "./components/MyCollege";
import MySchool from "./components/MySchool";
import MyName from "./components/MyName";

function App() {
  return (
    <div>
      <MyName/>
      <MySchool/>
      <MyCollege/>
      <MyBtech/>
    </div>
  );
}

export default App;
