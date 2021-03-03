import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Redirect } from "react-router-dom";

export default function ConfirmReservation() {
    const location = useLocation();

    useEffect(()=>{
        if (location.state) {
            console.log(location.state);
            
        }
    }, []);

    if (location.state)
    {
        return (
            <h1>Confirm your reservation</h1>
            );

    } else {
        return (
            <Redirect to="/404" />
        );
    }
    
}
