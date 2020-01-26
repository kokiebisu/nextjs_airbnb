export default ({ label, placeholder }) => {
	return (
		<div class='lg:mb-0 w-full lg:w-1/3 lg:pr-2 py-2 '>
			<label class='uppercase text-xs font-semibold pb-2 text-gray-800 block' for={label}>
				{label}
			</label>
			<input type='text' id={label} class='p-3 w-full rounded border border-gray-300' placeholder={placeholder} />
		</div>
	);
};
