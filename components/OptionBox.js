export default ({ label, options }) => {
	return (
		<div class='w-full lg:w-1/3'>
			<label for={label} class='uppercase text-sm font-semibold pb-2 text-gray-800'>
				{label}
			</label>
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
