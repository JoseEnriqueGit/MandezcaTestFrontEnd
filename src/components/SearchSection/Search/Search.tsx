// Components
import { SearchIcon } from "../../Icons";

interface SearchProps {
	setToSearch: (newValue: string) => void;
}

const Search = (props: SearchProps) => {
	const { setToSearch } = props;

	return (
		<label htmlFor="Search" className="flex col-span-full flex-row w-full">
			<div className="flex justify-center items-center bg-gray-50 rounded-l-md px-6 hover:cursor-text">
				<SearchIcon stroke="#2c3e50" height={24} />
			</div>
			<input
				id="Search"
				type="search"
				className="bg-gray-50 w-full p-3 font-semibold outline-none rounded-r-md"
				autoComplete="off"
				autoCorrect="off"
				onChange={(e) => setToSearch(e.target.value)}
			/>
		</label>
	);
};

export default Search;
