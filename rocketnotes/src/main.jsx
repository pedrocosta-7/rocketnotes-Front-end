import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Details } from './pages/Details/Details.jsx'
import { ThemeProvider } from "styled-components"
import theme from './styles/theme.js'
import GlobalStyles from './styles/global.js'
import { Routes } from './routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>
  </StrictMode>,
)
