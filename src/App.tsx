import Hero from './components/Hero';
import WelcomeDark from './components/WelcomeDark';
import Timing from './components/Timing';
import DressCode from './components/DressCode';
import Anketa from './components/Anketa';
import Gifts from './components/Gifts';
import Contacts from './components/Contacts';

function App() {
  return (
    <main className="min-h-screen bg-paper w-full font-sans text-dark overflow-x-hidden relative">
      <Hero />
      <WelcomeDark />
      <Timing />
      <DressCode />
      <Anketa />
      {/* Divider */}
      <div className="paper-effect w-full flex flex-col items-center py-0">
        <div className="w-full max-w-2xl mx-auto flex items-center gap-6 px-8">
          <div className="flex-1 h-px bg-slate/10"></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate/20 flex-shrink-0">
            <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 21 L12 16.5 L6.5 21 L8.5 13.5 L3 9 L10 9 Z" fill="currentColor"/>
          </svg>
          <div className="flex-1 h-px bg-slate/10"></div>
        </div>
      </div>
      <Gifts />
      <Contacts />
    </main>
  );
}

export default App;
