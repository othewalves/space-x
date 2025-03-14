import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<p>Home 2</p>} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;