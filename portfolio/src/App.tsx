import React, {useState, useEffect} from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#222',
          backgroundColor: '#fff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          color: '#222',
          backgroundColor: '#fff',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#222',
        },
      },
    },
  },
});

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
      <ThemeProvider theme={theme}>
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
            <FadeIn transitionDuration={700}>
                <Main/>
                <Expertise/>
                <Timeline/>
                <Project/>
                <Contact/>
            </FadeIn>
            <Footer />
        </div>
      </ThemeProvider>
    );
}

export default App;