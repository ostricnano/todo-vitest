import './SearchInput.css'

interface SearchInputProps {
  search: string;
  setSearch: (search: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  search, 
  setSearch
}) => {
  return (
    <div className='input-container'>
      <input 
        className='input'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        placeholder='Search for a follower...'
      />
    </div>
  )
}
