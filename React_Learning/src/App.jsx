import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <Header/>
      <Card title="React" description="JS library for UIs" color="#A78BFA" />
      <Card title="Vite" description="Fast build tool" color="#00C864" />
      <Card title="Tailwind" description="Utility-first CSS" color="#00B4D8" />
      <Counter/>
    </>
  )
}

export default App
