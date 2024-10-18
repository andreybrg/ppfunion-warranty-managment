import { Provider } from 'react-redux'
import store from 'rtk/configuration'
import themeStyles from './../layout/Layout.module.sass'

export const AppProvider = ({ children }) => {
    
    return(
        <Provider store={store}>
            <div className={themeStyles.mainTheme}>     
                {children}
            </div>
        </Provider>
    )
}