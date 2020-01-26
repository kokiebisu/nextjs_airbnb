export default ({ color, description, name, borderColor, fontColor }) => {
	return (
		<div class='lg:pr-2 pb-3 w-full lg:w-1/2'>
			<p className='py-2 text-white font-thin tracking-wide'>{description}</p>
			<a
				style={{ backgroundColor: color, border: `${borderColor} 2px solid`, color: `${fontColor}` }}
				className='block text-center py-3 rounded font-semibold w-full'
				href='#'>
				{name}
			</a>
		</div>
	);
};
