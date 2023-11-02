import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "auth";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/login" element={ <LoginPage /> } />

            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
