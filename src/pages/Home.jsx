import MainLayout from "../components/Layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">
          Selamat Datang di Quranku
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Pilih surat di sidebar untuk mulai membaca
        </p>
      </div>
    </MainLayout>
  );
};

export default Home;
