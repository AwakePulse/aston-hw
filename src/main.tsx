//В tsconfig.app "verbatimModuleSyntax": false
import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import App from './app/App.tsx';
import './app/styles.css';
import { ThemeProvider } from "./shared/lib/theme/ThemeContext.tsx";
import {store} from "./app/providers/store";
import AppRouter from "./app/providers/router/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <AppRouter />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import './index.css'
// import App from './app/App.tsx'
//
// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
