import Navbar from "components/global/navbar";
import Home from "pages/home";
import {  Routes , Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


function App() {
    return (
        <div className="bg-[#FCFCFC]">
            <ToastContainer 
                style={{fontSize: 15}}
                position="top-center"
                autoClose={2000}
                closeOnClick
                pauseOnHover
                hideProgressBar
            />
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
