export default ({ img, stars, description, avatar, hostName, hostCountry }) => {
	var starArray = [],
		i = 0,
		len = parseInt(stars);
	while (++i <= len) starArray.push(i);
	return (
		<div class='w-full lg:w-1/3 px-1 my-5'>
			<img class='bg-no-repeat bg-cover rounded' src={img} alt='' />
			<div class='flex items-start justify-start flex-wrap py-2'>
				{starArray.map(function(i) {
					return (
						<svg
							key={i}
							class='fill-current w-4 h-4 text-cyan mr-1'
							viewBox='0 0 1000 1000'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z' />
						</svg>
					);
				})}
			</div>
			<p class='text-gray-600 font-thin text-sm'>{description}</p>
			<div class='flex items-center justify-start flex-wrap mt-3'>
				<img class='rounded-full w-12 h-12' src={avatar} alt='' />
				<div class='pl-4'>
					<p class='text-sm font-semibold text-gray-900'>{hostName}</p>
					<p class='text-sm text-gray-800'>{hostCountry}</p>
				</div>
			</div>
		</div>
	);
};
