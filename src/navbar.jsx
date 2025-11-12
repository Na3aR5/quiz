import React    from "react";
import ReactDOM from "react-dom/client";

import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-home transition-300ms">Home</Link>
        </div>
    );
};