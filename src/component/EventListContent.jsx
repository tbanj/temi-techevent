import React, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const EventListContent = () => {

    const { events } = useSelector(state => ({
        events: state.eventReducer.currentEvents
    }));

    const navigate = useNavigate();
    useEffect(() => {

        return () => {
        }
    }, [])


    console.warn("EventListContent", events)
    return (<Fragment>


        <div className='my-3 container'>
            <button
                onClick={() => navigate(-1)}
                className="button-two text-white text-center"><span>Back to home</span></button>
        </div>
        <div className="container my-5">


            <div className='row d-flex justify-content-around'>
                {(events?.length > 0) && events.map((data, id) => {
                    return (<div className='col-md-6' key={data.slug + id}>
                        {(data?.data?.length > 0) && data.data.map((innerData, innerId) => (
                            <div className="" key={innerData.eventType + innerId}>
                                <div className="card card-1 m-2" style={{ backgroundImage: "url(" + innerData.img + ")" }}>
                                    <h3>{innerData.title}</h3>
                                    <p>{innerData.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>)
                })}
            </div>
        </div>
    </Fragment >);
}

export default EventListContent;