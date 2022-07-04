import Card from './Card';
import React from 'react'
import { useState } from 'react';

import Header from './Header';





export default function App() {
  let [input, setInput] = useState("");
  

    return (
      <>

          <Header setInput={{ setInput }} />
          <Card input={input}      />


          

      </>
    )
  }
