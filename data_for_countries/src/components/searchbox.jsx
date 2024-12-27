const searchbox = ({ searchQuery, handleSearchChange }) => {
  searchQuery = searchQuery;
  handleSearchChange = handleSearchChange;
  return (
    <div>
      <span>find country </span>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a country"
      />
    </div>
  );
};

export default searchbox;
