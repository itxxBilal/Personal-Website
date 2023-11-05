import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes.jsx';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
import styled from 'styled-components';
import Loading from './components/loading/loading.jsx';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
    // linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
`;

function App() {
  const [darkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data) for a few seconds
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        {loading ? ( // Display the Loading component while loading is true
          <Loading />
        ) : (
          <Body>
            <HeroSection />
            <Wrapper>
              <Skills />
              <Experience />
            </Wrapper>
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
          </Body>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
