import Buttons from "./components/Buttons";
import Main from "./components/Main_";
import './index.css'

function App() {
  return <div className="master-container bg-black w-[100vw] h-[100vh] flex flex-col justify-center items-center"><Main></Main>
    <Buttons></Buttons>
  </div>;

}

export default App;
