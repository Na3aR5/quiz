import React    from "react";
import ReactDOM from "react-dom/client";

import { Link } from "react-router-dom";

export default function MainPage() {
    return (
        <>
            <div className="main-page-div">
                <Link to="/create" className="option-button transition-300ms">
                    Create Quiz
                </Link>
                <Link className="option-button transition-300ms">Choose Quiz</Link>
            </div>
        </>
    );
}