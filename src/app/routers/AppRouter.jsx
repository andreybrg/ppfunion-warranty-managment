import { Layout } from 'app/layout'
import { CodeQRGenerationModule } from 'modules/codeGenerator/codeQRGeneration'
import { Panel } from 'pages/panel'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route psth={'/'} element={<Layout/>}>
                    <Route path={'panel'} element={<Panel/>}/>
                    <Route path={'qr/:code'} element={<CodeQRGenerationModule/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}