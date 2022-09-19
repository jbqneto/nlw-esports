import { MagnifyingGlassPlus } from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog';

export function AdBanner() {
    
    return (
        <div id="box" className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
                <strong className='text-2xl text-white font-black block'>Não encontrou o seu duo?</strong>
                <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players</span>
            </div>

            <Dialog.Trigger className='flex items-center gap-3 py-3 px-4 rounded bg-violet-500 text-white hover:bg-violet-600'>
                <MagnifyingGlassPlus size={24} />
                Publicar anúncio
            </Dialog.Trigger>

            </div>
      </div>
    )
}