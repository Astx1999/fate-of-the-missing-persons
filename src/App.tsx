import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Themes } from './components/Themes/Themes'
import { Programme } from './components/Programme/Programme'
import { Speakers } from './components/Speakers/Speakers'
import { Partners } from './components/Partners/Partners'
import { Venue } from './components/Venue/Venue'
import { Footer } from './components/Footer/Footer'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Themes />
        <Programme />
        <Speakers />
        <Partners />
        <Venue />
      </main>
      <Footer />
    </div>
  )
}

export default App
