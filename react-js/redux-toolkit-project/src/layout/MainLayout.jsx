import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
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