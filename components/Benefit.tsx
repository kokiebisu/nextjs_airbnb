interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const Benefit: React.FC<Props> = ({ title, description, children }) => {
  return (
    <div className='lg:w-1/3 w-full my-6'>
      {children}
      <h4 className='font-semibold text-gray-800 my-3'>{title}</h4>
      <p className='text-gray-600 tracking-wide font-light leading-snug text-sm pr-4'>
        {description}
      </p>
    </div>
  );
};
