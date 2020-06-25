import InputBox from './InputBox';
import OptionBox from './OptionBox';

interface Props {}

export const Booking: React.FC<Props> = () => {
  return (
    <div className='max-w-5xl mx-auto py-12 my-1 px-4 lg:px-0'>
      <h3 className='text-2xl font-semibold text-gray-800 lg:mb-4'>
        Book unique homes and experiences
      </h3>
      <form action=''>
        <div className='flex flex-wrap items-start justify-start'>
          <InputBox label='where' placeholder='Anywhere' />
          <InputBox label='when' placeholder='mm/dd/yy - mm/dd/yyyy' />
          <OptionBox
            label='guests'
            options={{
              first: '1 Guest',
              second: '2 Guests',
              third: '3 Guests',
            }}
          />
        </div>
      </form>
    </div>
  );
};
