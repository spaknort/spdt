import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, RoutesModule } from './app'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<App />)

export default RoutesModule