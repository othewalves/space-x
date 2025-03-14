import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<p>Home</p>} />
                <Route path='/home' element={<p>Home 2</p>} />
                <Route path='*' element={<Navigate to={'/'} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;