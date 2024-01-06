"use client";
import { useHeroSection } from '@taotask/modules/order/react/sections/use-hero-section';

export const HeroSection: React.FC<{showGuestSection: any}> = ({showGuestSection}) => {
    const presenter:any = useHeroSection();
    const fontFamily = presenter.font;
    const city='de Provence';

    return (
    <section className={`hero-section-minh relative overflow-hidden bg-cover bg-no-repeat custom-hero-bg bg-[#458236]`}>
        <div
        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed">
         <div className="flex h-full items-center justify-center">
                <div className="px-6 text-center text-white md:px-12">
                    <h1 className={`${fontFamily} mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl`}>
                        Les plus belle tables {city}<br /><span className="text-[#485]">La perfection du goût</span>
                    </h1>
                    <button type="button"
                        onClick={showGuestSection}
                        className="font-mono rounded border-2 border-gray-50 px-[46px] pt-[14px] pb-[12px] 
                        text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out 
                        hover:border-gray-100 hover:bg-gray-100 hover:bg-opacity-10 hover:text-gray-100 
                        focus:border-gray-100 focus:text-gray-100 focus:outline-none focus:ring-0 
                        active:border-gray-200 active:text-gray-200"
                        data-te-ripple-init data-te-ripple-color="light">
                        Réserver une table
                    </button>
                </div>
            </div>
        </div>
  </section>
  )
}