import './styles/main.css';
import logo from './assets/logo.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>DUO</span> está aqui.
      </h1>

      <div id='games' className="grid grid-cols-6 gap-6 mt-16">
        <a className='relative rounded-lg overflow-hidden' href="">
          <img src="imgs/game-1.png" alt="" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Counter-Strike</strong>
            <span className="text-zinc-300 text-sm block mt-1">4 anúncios</span>
          </div>

        </a>
      </div>

      <div id="box" className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
          </div>

          <button className='flex items-center gap-3 py-3 px-4 rounded bg-violet-500 text-white hover:bg-violet-600'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>

        </div>
      </div>

    </div>
  )
}

export default App
