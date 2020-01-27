import { motion } from 'framer-motion';

export default ({ color, description, name, borderColor, fontColor }) => {
	return (
		<div class='lg:pr-2 pb-3 w-full lg:w-1/2' initial='initial' animate='animate'>
			<p className='py-2 text-white font-thin tracking-wide'>{description}</p>
			<motion.a
				whileHover={{ scale: 0.95, easing: 'ease' }}
				whileTap={{ scale: 1.05 }}
				style={{ backgroundColor: color, border: `${borderColor} 2px solid`, color: `${fontColor}` }}
				className=' block text-center py-3 rounded font-semibold w-full'
				href='#'>
				{name}
			</motion.a>
		</div>
	);
};
