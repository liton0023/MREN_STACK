import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Client/Router/Router.jsx'
import './index.css'

const queryClient=new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
<div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={Router}/>
</div>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
