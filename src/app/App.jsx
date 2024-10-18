import React from "react"
import { AppProvider } from "app/providers"
import { ModalsModule, ModalsProvider } from "modules/modals"
import { AppRouter } from "app/routers"
import { AppInitialization } from "app/initialization"
import { MicroAlert } from "modules/alerts"
const App = () => {
  
  return (
    <AppProvider>
      <ModalsProvider>
        <AppInitialization>
          <AppRouter/>
        </AppInitialization>
        <ModalsModule/>
        <MicroAlert/>
      </ModalsProvider>
    </AppProvider>
  )
}

export default App