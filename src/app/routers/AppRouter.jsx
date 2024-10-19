import { Layout } from 'app/layout'
import { Route, Routes } from 'react-router-dom'
import { CodeQRGenerationModule } from 'modules/codeGenerator'
import { SuggestToken } from 'pages/auth'
import { Index } from 'pages/index'
import { Panel } from 'pages/panel'
import { WarrantyRegistration } from 'pages/wrrantyRegistration'
import { AuthorizedRoute, ProtectedRoute } from 'shared/routes'
import { AccessDenied } from 'pages/accessDenied'

export const AppRouter = () => {
    return(
        
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<AuthorizedRoute><Index/></AuthorizedRoute>}/>
                    <Route path={'panel'} element={<ProtectedRoute/>}>
                    {/* <Route path={'panel'}> */}
                        <Route index element={<Panel/>}/>
                        <Route path={'qr/:code'} element={<CodeQRGenerationModule/>}/>
                    </Route>
                    <Route path={'register'}>
                        <Route index element={<WarrantyRegistration/>}/>
                        <Route path={':code'} element={<WarrantyRegistration/>}/>
                    </Route>
                    <Route path={'auth'}>
                        <Route path={'token'} element={<SuggestToken/>}/>
                    </Route>
                    <Route path={'access-denied'} element={<AccessDenied/>}/>

                </Route>
            </Routes>
        
    )
}