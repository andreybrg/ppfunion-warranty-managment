import { Layout } from 'app/layout'
import { CodeQRGenerationModule } from 'modules/codeGenerator'
import { Panel } from 'pages/panel'
import { WarrantyRegistration } from 'pages/wrrantyRegistration'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route psth={'/'} element={<Layout/>}>
                    <Route path={'panel'}>
                        <Route index element={<Panel/>}/>
                        <Route path={'qr/:code'} element={<CodeQRGenerationModule/>}/>
                    </Route>
                    <Route path={'register'} element={<WarrantyRegistration/>}>
                        <Route path={':code'} element={<WarrantyRegistration/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}