interface Props {
  label: string;
  placeholder: string;
}

export const InputBox: React.FC<Props> = ({ label, placeholder }) => {
  return (
    <div className='lg:mb-0 w-full lg:w-1/3 lg:pr-2 py-2 '>
      <label
        className='uppercase text-xs font-semibold pb-2 text-gray-800 block'
        htmlFor={label}>
        {label}
      </label>
      <input
        type='text'
        id={label}
        className='p-3 w-full rounded border border-gray-300'
        placeholder={placeholder}
      />
    </div>
  );
};
