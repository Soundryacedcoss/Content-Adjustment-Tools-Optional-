import { createContext, useState } from 'react';
import './App.css';
import { Newspaper } from './Newspaper';
export const ReadableFontContext=createContext()
function App() {

  return (
    <div className="App" >
 
      <Newspaper/>

    </div>
  );
}

export default App;
