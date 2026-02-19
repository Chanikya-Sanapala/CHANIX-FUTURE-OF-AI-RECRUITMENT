"use client";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }) {
    const clientId = "616738645984-00kvl0irvk29ivr27qn2gn5fsu7s4uug.apps.googleusercontent.com";

    if (!clientId) {
        console.error("Missing Google Client ID in environment variables");
    }

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <ToastContainer position="top-right" autoClose={3000} />
            {children}
        </GoogleOAuthProvider>
    );
}
