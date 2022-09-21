import './styles/main.css';
import logo from './assets/logo.svg';

import { useEffect, useState } from 'react';
import { GameBanner } from './components/GameBanner';
import { AdBanner } from './components/AdBanner';
import { client } from './service/api';
import { useKeenSlider } from 'keen-slider/react'


import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';

function App() {
  const [games, setGames] = useState<any[]>([]);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: {
        perView: 6,
        spacing: 24,
      },
      slideChanged() {
        console.log('slide changed')
      },
    }
  )

  useEffect(() => {
    getGames();
  }, []);

  function getGames() {
    client.getGames()
      .then(data => setGames(data))
      .catch((err) => {
        console.log('error loading data:', err);
      });
  }

  return (
    <div className="App max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>DUO</span> está aqui.
      </h1>

      <div id='games' className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map((game) => {
            return (
              <GameBanner containerClass="keen-slider__slide" key={game.id} title={game.title} ads={game.ads} bannerUrl={game.bannerUrl} />
            )
          })
        }
      </div>

      <Dialog.Root onOpenChange={console.log}>
        <AdBanner />
        <CreateAdModal games={games} />
      </Dialog.Root>

    </div>
  )
}

export default App
