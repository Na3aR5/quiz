import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./mainPage.jsx";
import { CreateQuizPage, CreateNewQuizPage, SavedQuizesPage } from "./createQuizPage.jsx";
import { Navbar } from "./navbar.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>
                    <Navbar/>
                    <MainPage/>
                </>}/>
                <Route path="/create" element={<>
                    <Navbar/>
                    <CreateQuizPage/>
                </>}/>
                <Route path="/create/new" element={<>
                    <Navbar/>
                    <CreateNewQuizPage/>
                </>}/>
                <Route path="/create/saved" element={<>
                    <Navbar/>
                    <SavedQuizesPage/>
                </>}/>
            </Routes>
        </BrowserRouter>
    );
}