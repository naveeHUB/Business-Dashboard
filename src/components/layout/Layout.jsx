import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import PageTransition from '../ui/PageTransition';

const Layout = () => {
    const location = useLocation();

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
            <Sidebar />
            <div style={{ flex: 1, marginLeft: '260px', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <main style={{ flex: 1, padding: '2rem', overflowY: 'auto', overflowX: 'hidden' }}>
                    <AnimatePresence mode="wait">
                        <PageTransition key={location.pathname}>
                            <Outlet />
                        </PageTransition>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default Layout;
