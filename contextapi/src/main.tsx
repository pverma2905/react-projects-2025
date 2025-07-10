import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/UserContext.tsx';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter> {/* ✅ Wrap everything inside */}
        <AppProvider>
          <UserProvider>
            <App />
          </UserProvider>          
        </AppProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
