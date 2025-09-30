export default function Home() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold text-center">Digioh React Next Test Page</h1>

      <button className="openDigiohPopup px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
        Open Digioh Popup
      </button>
    </div>
  );
}