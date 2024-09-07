import { useState } from 'react'
import FormContainer from './Component/FormContainer'
import Logo from './Component/Logo'
import FormControls from './Component/FormControls'
import Marker from './Component/Marker'

import Control1 from './Component/FormControls/Control1'
import Control2 from './Component/FormControls/Control2'
import Control3 from './Component/FormControls/Control3'

import './App.css'

function App() {
  const [currentStage, setCurrentStage] = useState(0);

  function changeStage(){
    setCurrentStage(currStage=> currStage+1)
  }

  return (
    <FormContainer>
      <Logo/>
      <Marker currentStage={currentStage}/>
      <FormControls>
          <div className="carasoualContainer" style={{right:currentStage*100+"%"}}>
          <Control1 changeStage={changeStage}/>
          <Control2 changeStage={changeStage}/>
          <Control3 />
          </div>
      </FormControls>
    </FormContainer>
  )
}

export default App
