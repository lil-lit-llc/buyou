import React from "react";

export default function Iframe({src}) {
    const iframeStyle = {      
        display: "block",  /* iframes are inline by default */   
        height: "100vh",  /* Set height to 100% of the viewport height */   
        width: "100vw",  /* Set width to 100% of the viewport width */     
        border: "none", /* Remove default border */
        background: "white", /* Just for styling */
    }
    return (
        <iframe style={iframeStyle} src="/home.html"></iframe>
    );
}