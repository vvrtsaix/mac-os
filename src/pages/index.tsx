import type { NextPage } from 'next'
import MenuBar from 'widgets/menu-bar'

const Home: NextPage = () => {
  return (
    <main className="h-screen w-screen bg-colorful bg-cover bg-center bg-origin-border">
      <header>
        <MenuBar />
      </header>
    </main>
  )
}

export default Home
