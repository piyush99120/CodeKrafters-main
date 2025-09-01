import Image from "next/image";
import { RainbowButton } from "./btn";
import { InfiniteSlider } from "./infinite-slider";

function InfiniteSliderVertical() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-gray-900">
            Discover Our Latest Collections
          </h2>
          <p className="text-lg text-gray-600 items-center md:items-start">
            Explore our curated selection of trending items. Each piece is carefully selected
            to bring you the best in style and quality.
          </p>
          <RainbowButton>Get Unlimited Access</RainbowButton>;
        </div>
    <div className='flex h-[350px] item-center justify-center space-x-4'>
      <InfiniteSlider direction='vertical'>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider1.jpg'
            alt='Dean blunt - Black Metal 2'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider3.jpg'
            alt='Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider4.jpg'
            alt='Yung Lean - Stardust'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider5.jpg'
            alt='Lana Del Rey - Ultraviolence'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider6.jpg'
            alt='A$AP Rocky - Tailor Swif'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520'
            alt='Midnight Miami (feat Konvy) - Nino Paid, Konvy'
            fill
            className='object-cover'
            sizes="120px"
            unoptimized
          />
        </div>
      </InfiniteSlider>
      <InfiniteSlider direction='vertical' reverse>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645'
            alt='DAYS BEFORE RODEO - Travis Scott'
            fill
            className='object-cover'
            sizes="120px"
            unoptimized
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider5.jpg'
            alt="You're in My System - TORYONTHEBEAT"
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider4.jpg'
            alt="You can't tell me - People Make the World Go Round"
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider3.jpg'
            alt='ye - Kanye West'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider2.jpg'
            alt='Slime Season 3 - Young Thug'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
        <div className='relative aspect-square w-[120px] rounded-[4px] overflow-hidden'>
          <Image
            src='/images/slider1.jpg'
            alt='SWAG - 8ruki'
            fill
            className='object-cover'
            sizes="120px"
          />
        </div>
      </InfiniteSlider>
    </div>
    </div>
    </div>
  );
} 

export default InfiniteSliderVertical;
