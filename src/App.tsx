import Header from './Components/Header/Header'
import HeaderCart from './Components/HeaderCart/HeaderCart'
import './App.css'
import MainSection from './Components/MainSection/MainSection'

function App() {
  return (
    <>
      <Header children={<HeaderCart />} />
      <MainSection />
    </>
  )
}

export default App