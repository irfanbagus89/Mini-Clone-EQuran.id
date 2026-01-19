const TafsirBox = ({ tafsir }) => {
  if (!tafsir) return null;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-6">
      <h2 className="text-lg font-bold mb-2 dark:text-white">Tafsir</h2>
      <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
        {tafsir}
      </p>
    </div>
  );
};

export default TafsirBox;
