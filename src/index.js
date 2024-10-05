import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.module.sass'
import { App } from 'app'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <App />
)