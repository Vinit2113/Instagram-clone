import './App.css'
import LeftSide from './Components/LeftSide'
import Middle from './Components/Middle'
import RightSide from './Components/RightSide'


function App() {
  return (
    <div className="App">
      <div className="leftSideHome">  
        <LeftSide />
      </div>
      <div className="middleSide">
        <Middle />
        </div>
      <div className="rightSide">
        <RightSide />
      </div>
    </div>
  )
}

export default App
