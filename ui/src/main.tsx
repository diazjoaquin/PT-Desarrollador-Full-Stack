import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'
import { AuthProvider } from './context/auth.context'
import { NotificationProvider } from './context/notification.context'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
			<NotificationProvider>
				<RouterProvider router={router} />
			</NotificationProvider>
		</AuthProvider>
  </StrictMode>,
)
