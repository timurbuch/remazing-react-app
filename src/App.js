import { Header } from './components/Header';
import { SideNav } from './components/SideNav';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
function App() {
  return (
    <div className="w-screen h-screen relative">
      <Header />
      <div className="flex w-screen h-l">
        <SideNav />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
