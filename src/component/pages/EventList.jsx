import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate } from 'react-router-dom';
import EventListContent from '../EventListContent';
import Header from '../Header/Header';
const EventList = () => {

    const { events } = useSelector(state => ({
        events: state.eventReducer.currentEvents
    }));

    return (
        <div className="w-100">
            {(!events || (events?.length < 1)) && <Navigate to="/" />}
            <Header />
            <EventListContent />
        </div>);
}

export default EventList;