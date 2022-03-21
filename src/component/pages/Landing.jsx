import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { storeEvents } from "../../redux/action/events";
import { persistor } from "../../redux/store";
import Header from "../Header/Header";
import LandingContent from "../LandingContent";


const Landing = () => {
    useEffect(() => {
        // to clear the storage once this route is visited
        persistor.purge()

        return () => {
        }
    }, [])

    return (<div className="w-100">
        <Header />
        <LandingContent />
    </div>);
}

export default Landing;