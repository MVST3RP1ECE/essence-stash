import Header from './Components/Header/Header'
import HeaderCart from './Components/HeaderCart/HeaderCart'
import InfoSection from './Components/MainSection/MainSection'
import './App.css'

export default function App() {

  return (
    <>
      <Header children={<HeaderCart />} />
      <InfoSection />
    </>
  )
}