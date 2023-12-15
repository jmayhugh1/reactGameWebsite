import Alert from "./components/Alert";
import Button from './components/button'
import { useState } from "react";
function App() {
//state varialbe from visbity
const [alertVisible, setAlertVisbility] = useState(false);
  return (
    <div>
      { alertVisible && <Alert onClose = {() => setAlertVisbility(false)}> My Alert</Alert>}
        <Button onClick = {() => setAlertVisbility(true)}> My Button</Button>
      
    </div>
  );
}
export default App;
