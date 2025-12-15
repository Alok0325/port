import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// #region agent log
try {
  const rootEl = document.getElementById('root');
  fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:8',message:'App render start',data:{hasRoot:!!rootEl,rootExists:rootEl !== null},timestamp:Date.now(),sessionId:'debug-session',runId:'blank-page',hypothesisId:'A'})}).catch(()=>{});
} catch(e) {
  fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:10',message:'App render error',data:{error:e.message,stack:e.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'blank-page',hypothesisId:'A'})}).catch(()=>{});
}
// #endregion

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:18',message:'Root element not found',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'blank-page',hypothesisId:'B'})}).catch(()=>{});
    // #endregion
    throw new Error('Root element not found');
  }

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:24',message:'Creating React root',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'blank-page',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
  
  const root = ReactDOM.createRoot(rootElement);
  
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:29',message:'Rendering App component',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'blank-page',hypothesisId:'C'})}).catch(()=>{});
  // #endregion

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:37',message:'App rendered successfully',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'blank-page',hypothesisId:'C'})}).catch(()=>{});
  // #endregion
} catch (error) {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/ddf517f6-048f-4a68-98bc-5b2f026746ba',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:40',message:'Render failed',data:{error:error.message,stack:error.stack,name:error.name},timestamp:Date.now(),sessionId:'debug-session',runId:'blank-page',hypothesisId:'D'})}).catch(()=>{});
  // #endregion
  console.error('Failed to render app:', error);
  
  // Render error fallback
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace;">
        <h1>Error Loading App</h1>
        <p>${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `;
  }
}
