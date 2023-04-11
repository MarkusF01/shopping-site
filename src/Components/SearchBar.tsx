type Props = {
  isLightTheme: boolean;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = (props) => {

  const clientHeight = document.getElementById('')
  return (
    <div className={ props.isLightTheme ?  "search-bar-light" : "search-bar-dark"}>
      <input className="search-input" type="text" onClick={() => scrollTo(0, 1000)} onChange={props.handleSearchChange} placeholder="Search" />
      <button className="material-symbols-outlined" id="search-button">search</button>
    </div>
  );
};

export default SearchBar;
