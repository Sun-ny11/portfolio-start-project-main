import './App.css';
import { Footer } from './layout/footer/Footer';
import { Header } from './layout/header/Header';
import { Contact } from './layout/sections/contacts/Contacts';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Slogan } from './layout/sections/slogan/Slogan';
import { Testimony } from './layout/sections/testimoney/Testimony';
import { Works } from './layout/sections/works/Works';

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <Skills />
            <Works />
            <Testimony />
            <Contact />
            <Slogan />
            <Footer />
        </div>
    );
}

export default App;
