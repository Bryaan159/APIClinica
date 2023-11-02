import { AppointmentsHistoryPage, HomePage, ScheduleAppointmentPage } from "app/pages";
import { Navigate, Route, Routes } from "react-router-dom";

export const ClinicaUCARoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/scheludeAppointment" element={ <ScheduleAppointmentPage /> } />
            <Route path="/appointmentHistory" element={ <AppointmentsHistoryPage /> } />

            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    )
}
