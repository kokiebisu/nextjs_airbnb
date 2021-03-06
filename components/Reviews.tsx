import { ReviewCard } from './ReviewCard';

const card1 = require('../public/1.jpg');
const card2 = require('../public/2.jpg');
const card3 = require('../public/3.jpg');

const avatar1 = require('../public/jeff.png');
const avatar2 = require('../public/lesley.png');
const avatar3 = require('../public/denise.png');

interface Props {}

export const Reviews: React.FC<Props> = () => {
  return (
    <div className='max-w-5xl mx-auto py-12 my-1 px-4 lg:px-0'>
      <h3 className='font-semibold text-2xl leading-none text-gray-800'>
        What guests are saying about homes in the United States
      </h3>
      <div className='flex items-center flex-wrap justify-start lg:py-2'>
        <svg
          className=' w-4 h-4 flex-shrink-0 mt-4'
          viewBox='0 0 24 24'
          role='presentation'
          aria-hidden='true'
          focusable='false'
          style={{ height: 24, width: 24, fill: '#FFB400' }}>
          <path
            d='m21.95 9.48a.84.84 0 0 0 -.87-.48h-4.62a.5.5 0 0 0 0 1l4.14.01-4.81 4.17a.5.5 0 0 0 -.14.57l2.65 6.38-6.07-3.72a.5.5 0 0 0 -.52 0l-6.08 3.72 2.65-6.37a.5.5 0 0 0 -.13-.57l-4.75-4.18h5.75a.5.5 0 0 0 .46-.3l2.37-5.37 1.58 3.57a.5.5 0 0 0 .91-.41l-1.72-3.88a.8.8 0 0 0 -1.56-.01l-2.38 5.39h-5.9a.83.83 0 0 0 -.87.48.85.85 0 0 0 .32.96l4.85 4.25-2.78 6.67a.81.81 0 0 0 .16.98.66.66 0 0 0 .43.15 1.1 1.1 0 0 0 .56-.18l6.37-3.91 6.38 3.92a.81.81 0 0 0 .99.03c.15-.12.37-.41.15-1l-2.77-6.66 4.92-4.26a.84.84 0 0 0 .31-.95zm-.78.53h-.01'
            fill='#484848'></path>
          <path d='m11 21.5a.5.5 0 1 1 -.5-.5.5.5 0 0 1 .5.5zm-3.5-15.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm15 10h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-15-13h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm10.22 7.54a.84.84 0 0 0 -.17-.02q-.28-.01-3.19 0a .6.6 0 0 1 -.55-.35l-1.5-3.23a.42.42 0 0 0 -.75 0l-1.81 4.14a2.92 2.92 0 0 0 4.12 3.72l.46-.26 3.49-2.99.16-.18a.5.5 0 0 0 -.26-.82z'></path>
        </svg>
        <p className=' text-gray-700 sm:mt-5 sm:pl-4 lg:mt-5 lg:pl-4'>
          United States homes were{' '}
          <strong className='emphasized'>rated 4.8 out of 5 starts</strong> with
          <strong className='emphasized'> 42,5000,000+ reviews</strong>
        </p>
      </div>
      <div className='flex items-start flex-wrap'>
        <ReviewCard
          img={card1}
          stars='5'
          description='What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...'
          avatar={avatar1}
          hostName='Jeff'
          hostCountry='United States'
        />
        <ReviewCard
          img={card2}
          stars='4'
          description='What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...'
          avatar={avatar2}
          hostName='Lesley'
          hostCountry='United Kingdom'
        />
        <ReviewCard
          img={card3}
          stars='5'
          description='What a wonderful little cottage! More spacious and adorable than the pictures show. We never met our hosts, but we felt welcomed and...'
          avatar={avatar3}
          hostName='Denise'
          hostCountry='United States'
        />
      </div>
    </div>
  );
};
