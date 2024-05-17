import { SearchBar } from "../../assets/icons";

interface SearchProps {
  title: string;
}

const Search = ({
  title,
}: SearchProps) => {
  return (
  <div className={`grid items-center relative`}>
    <span className={`absolute inset-y-0 left-4 flex items-center`}>
      <SearchBar/>
    </span>
    <input
      className={`bg-white  rounded-full w-full h-8 pl-10 outline-none font-regular text-14 leading-none placeholder:text-secondary-400`}
      placeholder={title}
      type="text"
    />
  </div>
  )
}

export default Search;