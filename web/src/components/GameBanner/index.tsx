interface BannerProps {
    bannerUrl: string;
    title: string;
    ads: number;
    containerClass?: string;
}

export function GameBanner(props: BannerProps) {

    return (
        <div className={props.containerClass ?? 'game-banner'}>
            <a className='relative rounded-lg overflow-hidden' href="">
                <img src={props.bannerUrl} alt={props.title} />

                <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
                    <strong className='font-bold text-white block'>{props.title}</strong>
                    <span className="text-zinc-300 text-sm block mt-1">{props.ads} anúncios</span>
                </div>

            </a>
        </div>
    )
}