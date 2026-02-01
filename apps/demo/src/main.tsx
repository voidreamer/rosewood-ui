import React from 'react'
import ReactDOM from 'react-dom/client'
import '@rosewood-ui/css/dist/rosewood.css'
import { ToastProvider } from '@rosewood-ui/react'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
    </ToastProvider>
  </React.StrictMode>
)
