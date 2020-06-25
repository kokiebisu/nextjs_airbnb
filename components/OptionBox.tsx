interface Props {
  label: string;
  options: OptionProps;
}

interface OptionProps {
  first: string;
  second: string;
  third: string;
}

export const OptionBox: React.FC<Props> = ({ label, options }) => {
  return (
    <div className='lg:w-1/3 w-full pt-2 lg:pr-0 '>
      <label
        htmlFor={label}
        className='uppercase tracking-wide font-semibold text-xs text-gray-900 mb-2 block'>
        {label}
      </label>
      <div className='relative'>
        <select
          id={label}
          className='p-3 border border-gray-300 rounded w-full appearance-none'>
          <option value='1'>{options.first}</option>
          <option value='2'>{options.second}</option>
          <option value='3'>{options.third}</option>
        </select>
        <div className='flex items-center pointer-events-none absolute inset-y-0 right-0 px-2'>
          <svg
            className='fill-current h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </div>
      </div>
    </div>
  );
};
