import Hero from './components/Hero';
import WelcomeDark from './components/WelcomeDark';
import Timing from './components/Timing';
import DressCode from './components/DressCode';
import Anketa from './components/Anketa';
import Contacts from './components/Contacts';

function App() {
  return (
    <main className="min-h-screen bg-paper w-full font-sans text-dark overflow-x-hidden relative">
      <Hero />
      <WelcomeDark />
      <Timing />
      <DressCode />
      <Anketa />
      <Contacts />
    </main>
  );
}

export default App;
