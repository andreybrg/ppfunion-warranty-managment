import React from "react"
import { AppProvider } from "app/providers"
import { ModalsProvider } from "modules/modals"
import { AppRouter } from "app/routers"
import { AppInitialization } from "app/initialization"
const App = () => {
  
  return (
    <AppProvider>
      <ModalsProvider>
        <AppInitialization>
          <AppRouter/>
        </AppInitialization>
      </ModalsProvider>
    </AppProvider>
  )
}

export default App