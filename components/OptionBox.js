export default ({ label, options }) => {
	return (
		<div class='w-full lg:w-1/3'>
			<h4 class='uppercase text-sm font-semibold pb-2 text-gray-800'>{options.first}</h4>
			<label for={label}></label>
			<div>
				<select name='' id=''>
					<option value=''></option>
					<option value=''></option>
					<option value=''></option>
				</select>
			</div>
		</div>
	);
};
