import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from '../redux/store'

const MainLayout = () => {
    return (
        <div>
            <Provider store={store}>
                <Header />
                <Outlet />
                <Footer />
            </Provider>
        </div>
    )
}

export default MainLayout