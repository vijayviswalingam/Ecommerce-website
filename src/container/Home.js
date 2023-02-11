import React from 'react'
import Header from '../components/Header'
import { Routes, Route, Router } from 'react-router-dom'
import Dashboard from './Dashboard'
import Product from './Product'

export default function Home() {
    return (
        <>
            <div></div>
            <Header />

            <Routes>
                <Route path='/' element={<Dashboard />}  >
                <Route path='/product' element={<Product />} />

                </Route>
            </Routes>

        </>
    )
}
