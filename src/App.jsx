import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  useEffect(() => {
    // Apply dark mode class to html element based on theme
    const htmlElement = document.documentElement;
    const theme = store.getState().ui.theme;
    if (theme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
