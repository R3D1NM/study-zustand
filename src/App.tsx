
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="flex flex-col justify-center  items-center">
      <header className="flex bg-[#282c34] min-h-[10vh] flex-col align-middle justify-center min-w-[100vw] items-center">
        <h1 className="text-3xl text-white">Zustand</h1>
      </header>
      <div className="w-[80vw] flex justify-center flex-col align-middle text-center">
        <h2 className="text-2xl">1. Counter</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
