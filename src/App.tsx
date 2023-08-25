import './App.css'
import CalenderContainer from './containers/CalenderContainer'
import { ConfigProvider } from "antd";
function App() {
 

  return (
    <>
    <ConfigProvider >
    <CalenderContainer/>
    </ConfigProvider>
      
    </>
  )
}

export default App
