import type { NextPage } from 'next'
import Dock from 'widgets/dock'
import Finder from 'widgets/finder'
import MenuBar from 'widgets/menu-bar'

const Home: NextPage = () => {
  return (
    <div className="max-w-screen min-w-screen flex h-screen max-h-screen min-h-screen w-screen flex-col justify-between overflow-hidden bg-colorful bg-cover bg-center bg-origin-border">
      <header>
        <MenuBar />
      </header>
      <main
        id="main-content"
        className="max-w-screen h-full w-full overflow-hidden"
      >
        <Finder />
      </main>
      <footer>
        <Dock />
      </footer>
    </div>
  )
}

export default Home
