const AyatDropdown = ({ ayatList, onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="p-2 rounded-lg border dark:bg-gray-700 dark:text-white"
    >
      <option value="">Lompat ke ayat...</option>
      {ayatList.map((a) => (
        <option key={a.nomorAyat} value={a.nomorAyat}>
          Ayat {a.nomorAyat}
        </option>
      ))}
    </select>
  );
};

export default AyatDropdown;
