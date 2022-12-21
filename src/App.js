import { createContext, useState } from 'react';
import './App.css';
import { Newspaper } from './Newspaper';
export const ReadableFontContext=createContext()
function App() {
  const[ReadFont,setReadFont]=useState()
  return (
    <div className="App" style={{ReadFont}}>
      <ReadableFontContext.Provider value={{ReadFont,setReadFont}}>  
      <Newspaper/>
      </ReadableFontContext.Provider>
    </div>
  );
}

export default App;
