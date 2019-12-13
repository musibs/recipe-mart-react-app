import React, { useEffect } from 'react';
import Auth from '../Auth';
import image from '../images/generating.gif';

export default function Callback() {
    useEffect(() => {
        const auth = new Auth();
        auth.handleAuthentication();
    }, [])

    return(
        <div className="Main">
            <img src={image} alt="Loading.." />
        </div>
    )
}
