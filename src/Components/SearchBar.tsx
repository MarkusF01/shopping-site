type Props = {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = (props) => {
  return (
    <div className="search-bar">
      <input className="search-input" type="text" onChange={props.handleSearchChange} placeholder="Apple" />
      <button className="material-symbols-outlined" id="search-button">search</button>
    </div>
  );
};

export default SearchBar;
