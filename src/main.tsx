import {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { FacebookProvider } from 'react-facebook';
import App from './App.tsx'
import {Provider} from "react-redux";
import store from "./redux/store";
import './index.css'
import './i18n.js'
import Loading from "./components/Loading";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <FacebookProvider appId="317786397883664">
            <Suspense fallback={<Loading/>}>
                <App/>
            </Suspense>
            </FacebookProvider>
        </BrowserRouter>
    </Provider>
)
