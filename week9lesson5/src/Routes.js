import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Announcement from './components/Announsment';
import Slider from './components/Slider'
import Navbar from './components/Navbar';
import AdminContextProvider from './contexts/AdminContext';
import AuthContextProvider from './contexts/AuthContext';
import ClientContextProvider from './contexts/ClientContext';
import AddPage from './pages/AddPage';
import AdminPage from './pages/AdminPage';
import CartPage from './pages/CartPage';
import DetailPage from './pages/DetailPage';
import EditPage from './pages/EditPage';
import MainPage from './pages/MainPage';
import Categories from './components/Categories';
import Products from './components/Products';
import Footer from './components/Footer';

const MyRoutes = () => {
    return (
        <AuthContextProvider>


            <AdminContextProvider>
                <ClientContextProvider>

                    <BrowserRouter>
                        <Announcement />
                        <Navbar />
                        <Slider />
                        <Categories />
                        <Products />
                        <Routes>
                            <Route path="/admin" element={<AdminPage />} />
                            <Route path="admin/add" element={<AddPage />} />
                            <Route path="/admin/edit/:id" element={<EditPage />} />
                            <Route path="/" element={<MainPage />} />
                            <Route path="/phone/:id" element={<DetailPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            {/* Redirect - это уже Navigate */}
                            <Navigate to="/" />
                        </Routes>
                        <Footer />
                    </BrowserRouter>

                </ClientContextProvider>
            </AdminContextProvider>
        </AuthContextProvider>
    );
};

export default MyRoutes;
