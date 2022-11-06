import { ChakraProvider } from '@chakra-ui/react';
import * as React from 'react';
import Main from './assian/Main';


function App() {
 
  return (
    <ChakraProvider>
      <div className='App'>
     <Main/>
    </div>
    </ChakraProvider>
    

  );
}

export default App;
