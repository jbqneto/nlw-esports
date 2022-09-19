import './styles/main.css';
import logo from './assets/logo.svg';

import { useEffect, useState } from 'react';
import { GameBanner } from './components/GameBanner';
import { AdBanner } from './components/AdBanner';
import { client } from './service/api';

import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/input';
import { DayButton } from './components/DayButton';

function App() {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {

    client.getGames()
      .then(data => setGames(data))
      .catch((err) => {
        console.log('error loading data:', err);
      })

  }, []);

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
              <GameBanner key={game.id} title={game.title} ads={game.ads} bannerUrl={game.bannerUrl} />
            )
          })
        }

        
      </div>

      <Dialog.Root>
        <AdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          
          <Dialog.Content className='fixed bg-[#2A2634] px-10 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
            <Dialog.Title className='text-3xl font-black'>
              Publique um anúncio
            </Dialog.Title>

              <form className="mt-8 flex flex-col gap-4">
                <div className="form-control flex flex-col gap-2">
                  <Input type="text" label="Qual o game?" id="name" placeholder="Selecione o game que deseja jogar" />
                </div>

                <div className="form-control  flex flex-col gap-2">
                  <Input label="Seu nome (ou nickname)" type="text" name="name" placeholder="Como te chamam dentro do game?" id="name" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="form-control flex flex-col gap-2">
                    <Input label="Joga há quantos anos?" type="text" name="yearsPlaying" placeholder="Tudo bem ser ZERO" id="yearsPlaying" />
                  </div>

                  <div className="form-control flex flex-col gap-2">
                    <Input label="Qual o seu discord?" type="text" placeholder="Usuario#000" name="discord" id="discord" />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Quando costuma jogar?</label>
                    <div className="days grid grid-cols-4 gap-2">
                      <DayButton day='DOM' />
                      <DayButton day='SEG' />
                      <DayButton day='TER' />
                      <DayButton day='QUA' />
                      <DayButton day='QUI' />
                      <DayButton day='SEX' />
                      <DayButton day='SAB' />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="">Qual horário do dia?</label>
                    <div className="timePlaying grid grid-cols-2 gap-2">
                      <Input type="time" name="hourStart" placeholder="De" id="hourStart" />
                      <Input type="time" name="hourEnd" placeholder="Até" id="hourEnd" />
                    </div>
                  </div>
                </div>

                <div className="voice mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" name="voice" id="voice" />
                  Costumo me conectar ao chat de voz
                </div>

                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-400">
                    Cancelar
                  </Dialog.Close>
                  <button 
                    className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-700" 
                    type="submit">
                    <GameController />
                    Encontrar duo
                  </button>
                </footer>

              </form>

            </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default App
