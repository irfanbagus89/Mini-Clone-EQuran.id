const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Cari surat..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
    />
  );
};

export default SearchBox;
