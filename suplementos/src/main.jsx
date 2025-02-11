import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { GlobalStyle } from './style/global.js'
import { defaultTheme } from './style/theme/default.js'
import { ThemeProvider } from 'styled-components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
		<ThemeProvider theme={defaultTheme}>
		<GlobalStyle />
    <App />
		</ThemeProvider>

  </StrictMode>,
)
