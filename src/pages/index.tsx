import type { NextPage } from 'next'
import Dock from 'widgets/dock'
import MenuBar from 'widgets/menu-bar'

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col justify-between overflow-hidden bg-colorful bg-cover bg-center bg-origin-border">
      <header>
        <MenuBar />
      </header>
      <main>
        <div />
      </main>
      <footer>
        <Dock />
      </footer>
    </div>
  )
}

export default Home
