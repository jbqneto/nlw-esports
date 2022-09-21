import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';

import { Check, GameController } from 'phosphor-react';
import { Input } from '../../components/Form/input';
import { weekDays } from '../../components/DayButton';
import { Game } from '../../generated/games';

import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { FormEvent, useState } from 'react';
import axios from 'axios';
import { client } from '../../service/api';

interface Props {
    games: Game[];
}

export function CreateAdModal({ games }: Props) {

    const [selectedWeekDays, setSelectedWeekDays] = useState<string[]>([]);
    const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

    function handleDaySelect(days: any): void {
        setSelectedWeekDays(days);
    }

    function handleCreateAd(evt: FormEvent): void {
        evt.preventDefault();

        const formData = new FormData(evt.target as HTMLFormElement);
        
        let formEntries: any = Object.fromEntries(formData);
        
        client.postAd({
            discord: formEntries.discord,
            game_id: formEntries.game,
            hour_end: formEntries.hourEnd,
            hour_start: formEntries.hourStart,
            name: formEntries.name,
            use_voice_channel: useVoiceChannel,
            week_days: selectedWeekDays,
            years_playing: formEntries.yearsPlaying
        }).then((response) => console.log(response));
    }

    return (
        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
          
          <Dialog.Content className='fixed bg-[#2A2634] px-10 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px]'>
            <Dialog.Title className='text-3xl font-black'>
              Publique um anúncio
            </Dialog.Title>

              <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
                <div className="form-control flex flex-col gap-2">
                  <label htmlFor="name">Qual o game?</label>
                  <select 
                    id="game"
                    name="game"
                    defaultValue="" 
                    className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
                  >
                        <option value="" disabled>Selecione o game que deseja jogar</option>

                        {
                            games.map((game) => {
                                return <option key={game.id} value={game.id} label={game.title}>{game.title}</option>
                            })
                        }

                    </select>
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
                    <div className="days">
                        <ToggleGroup.Root 
                            onValueChange={handleDaySelect}
                            className="grid grid-cols-4 gap-2" type="multiple">

                                { 
                                weekDays.map(day => (
                                    <ToggleGroup.Item key={day.value} value={day.value} className={day.getClassName(selectedWeekDays)} title={day.fullName}>{day.char}</ToggleGroup.Item>
                                )) }

                        </ToggleGroup.Root>
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

                <label className="voice mt-2 flex gap-2 text-sm items-center">
                  <Checkbox.Root 
                  className="w-6 h-6 p-1 rounded bg-zinc-900" name="voice" id="voice"
                  checked={useVoiceChannel}
                  onCheckedChange={(checked) => setUseVoiceChannel(checked === true) } >
                    <Checkbox.Indicator>
                        <Check className="w-4 h-4 text-emerald-400" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                    Costumo me conectar ao chat de voz
                </label>

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
    )
}