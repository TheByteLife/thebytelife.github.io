import './App.css'
import { AnimatedBackground } from './AnimatedBackground'

function App() {
  return (
    <main className='container-fluid grid hero'>
      <AnimatedBackground />
      <div className='container'>
        <h1>The Byte Life</h1>
        <p className='by'>by <span className='name'>Kyuzo Nakamaru</span></p>
        <p>coming soon...</p>
      </div>
    </main>
  )
}

export default App
