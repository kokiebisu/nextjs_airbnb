import Banner from '../components/Banner';
import InputBox from '../components/InputBox';
import OptionBox from '../components/OptionBox';

const Home = () => {
	return (
		<>
			<Banner />
			<div class='max-w-5xl mx-auto py-12 px-4'>
				<h3 class='text-2xl font-semibold text-gray-800'>Book unique homes and experiences</h3>
				<form action=''>
					<div class='flex flex-wrap items-start justify-start w-full lg:w-1/3'>
						<InputBox label='where' placeholder='Anywhere' />
						<InputBox label='when' placeholder='mm/dd/yy - mm/dd/yyyy' />
						<OptionBox label='guests' options={{ first: 'First', second: 'Second', third: 'Third' }} />
					</div>
				</form>
			</div>
		</>
	);
};

export default Home;
