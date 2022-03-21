import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectedEvents, storeEvents } from '../redux/action/events';

const eventBtnList = [{
    id: 1, title: "A.I", slug: "a.i",
    data: [{
        id: 1, img: "https://source.unsplash.com/random", title: "A.1-1",
        eventType: "remote",
        text: "This is a media card. You can use this section to describe the content."
    },
    {
        id: 2, img: "https://source.unsplash.com/random", title: "A.1-2",
        eventType: "face-to-face",
        text: "This is a media card. You can use this section to describe the content."
    }]
},
{
    id: 2, title: "Mobile Development", slug: "mobile-evelopment",
    data: [{
        id: 1, img: "https://source.unsplash.com/random", title: "Mobile Development-1",
        eventType: "face-to-face",
        text: "This is a media card. You can use this section to describe the content."
    },
    {
        id: 2, img: "https://source.unsplash.com/random", title: "Mobile Development-2",
        eventType: "remote",
        text: "This is a media card. You can use this section to describe the content."
    }]
},
{
    id: 3, title: "Robotics", slug: "robotics",
    data: [{
        id: 1, img: "https://source.unsplash.com/random", title: "Robotics-1",
        eventType: "face-to-face",
        text: "This is a media card. You can use this section to describe the content."
    },
    {
        id: 2, img: "https://source.unsplash.com/random", title: "Robotics-2",
        eventType: "remote",
        text: "This is a media card. You can use this section to describe the content."
    }]
},
{
    id: 4, title: "Web Development", slug: "web-development",
    data: [{
        id: 1, img: "https://source.unsplash.com/random", title: "Web Development-1",
        eventType: "face-to-face",
        text: "This is a media card. You can use this section to describe the content."
    },
    {
        id: 2, img: "https://source.unsplash.com/random", title: "Web Development-2",
        eventType: "remote",
        text: "This is a media card. You can use this section to describe the content."
    }]
},
{
    id: 5, title: "Mechatronics", slug: "mechatronics",
    data: [{
        id: 1, img: "https://source.unsplash.com/random", title: "Mechatronics-1",
        eventType: "face-to-face",
        text: "This is a media card. You can use this section to describe the content."
    },
    {
        id: 2, img: "https://source.unsplash.com/random", title: "Mechatronics-2",
        eventType: "remote",
        text: "This is a media card. You can use this section to describe the content."
    }]
},
{
    id: 6, title: "Data Science", slug: "data-science",
    data: [{
        id: 1, img: "https://source.unsplash.com/random", title: "Data Science-1",
        eventType: "face-to-face",
        text: "This is a media card. You can use this section to describe the content."
    },
    {
        id: 1, img: "https://source.unsplash.com/random", title: "Data Science-2",
        eventType: "remote",
        text: "This is a media card. You can use this section to describe the content."
    }]
}]

const eventMode = [
    { id: 1, title: "Face to Face", slug: "face-to-face" },
    { id: 2, title: "Remote", slug: "remote" },]
const LandingContent = () => {

    const [selectedInterest, setSelectedInterest] = useState([]);
    const [selectedInterestSort, setSelectedInterestSort] = useState([]);
    const [checkedState, setCheckedState] = useState(
        new Array(eventBtnList.length).fill(false)
    );

    const [checkedEventState, setCheckedEventState] = useState(
        new Array(eventMode.length).fill(false)
    );

    const { events } = useSelector(state => ({
        events: state.eventReducer.currentEvents
    }));

    const dispatch = useDispatch();
    const navigate = useNavigate();




    const handleButtonColorChange = (value) => {
        if (value) {
            return {
                backgroundColor: "#6c757d", borderColor: "#6c757d",
                color: "#fff"
            };
        }
        /*  else {
             return { backgroundColor: "transparent", border: "1px solid transparent" };
         } */
    };



    /**
 * update existing selected interest list sorted by eventType
 * @param {String} data
 * @param {Boolean} state
 * @param {Array} localEvenSt
 * @returns
 */
    const updateInterestList = (data, state, localEvenSt) => {
        let filtered = JSON.stringify(selectedInterestSort);
        const checkerPos = localEvenSt.every(v => v === true);
        const checkerNeg = localEvenSt.every(v => v === false);


        if (checkerPos) {
            filtered = [...selectedInterestSort];
        }
        else if (checkerNeg) {
            filtered = [...selectedInterestSort];
        }

        else if ((data === "face-to-face") && state) {

            filtered = selectedInterestSort.map((o1) => {
                const modifiedData = o1.data.filter((o2) => o2.eventType === "face-to-face");
                return { ...o1, data: modifiedData }
            });
        }

        else if (((data === "face-to-face") && state === false)) {
            // filtered = selectedInterestSort.map((o1) => o1.data.filter((o2) => o2.eventType !== data));
            filtered = selectedInterestSort.map((o1) => {
                const modifiedData = o1.data.filter((o2) => o2.eventType !== data);
                return { ...o1, data: modifiedData }
            });
        }

        else if ((data === "remote") && state === false) {
            filtered = selectedInterestSort.map((o1) => {
                const modifiedData = o1.data.filter((o2) => o2.eventType !== data);
                return { ...o1, data: modifiedData }
            });
        }

        else if ((data === "remote") && state) {
            filtered = selectedInterestSort.map((o1) => {
                const modifiedData = o1.data.filter((o2) => o2.eventType === data);
                return { ...o1, data: modifiedData }
            });
        }


        setSelectedInterest([...filtered]);
    }


    /**
        * callback function to update selected interest list 
        * @param {Number} ind
        * @param {Boolean} data
        * @param {Function} setField
        * @param {Function} setField2
        * @returns
    */
    const handleSelected = (ind, data, setField, setField2) => {
        setField(ind);
        let handleClick = !data
        setField2(handleClick, ind)
    }



    /**
        * update the state of selected interest button
        * @param {Number} ind
        * @returns
    */
    const handleActiveBTN = (ind) => {
        setCheckedState((prevState) => {
            return prevState.map((item, ine) =>
                ine === ind ? !item : item
            )
        });
    }


    /**
        * filter out Interest when its state is false
        * @param {Number} index
        * @returns
    */
    const removedInterest = (index) => {
        const updatedInterest = selectedInterest.filter((selBTN) => selBTN.id !== eventBtnList[index].id);
        setSelectedInterest([...updatedInterest]);
    }



    /**
        * update the state of selectedInterest & selectedInterestSort list
        * @param {Object} data
        * @returns
    */
    const updateSelInterest = (data) => {
        setSelectedInterest([...selectedInterest, data]);
        setSelectedInterestSort([...selectedInterest, data]);
    }


    /**
* check the state of selectedInterest button 
* @param {Object} data
* @param {Number} ind
* @returns
*/
    const handleInterestSel = (data, ind) => {
        data === true ? updateSelInterest({ ...eventBtnList[ind] }) : removedInterest(ind);
    }



    /**
* callback function for eventType button
* @param {Number} ind
* @param {Object} data
* @param {Function} setField
* @param {Function} setField2
* @returns
*/
    const handleEventType = (ind, data, setField, setField2) => {
        setField(ind);
        let handleClick = !data
        setField2(handleClick, ind)
    }


    /**
* update the state of selected eventType button
* @param {Number} ind
* @returns
*/
    const handleActiveEvent = (ind) => {
        setCheckedEventState((prevState) => {
            return prevState.map((item, ine) =>
                ine === ind ? !item : item
            )
        });
    }

    const handleActiveInterestSel = (data, ind) => {
        const localEvenSt = [...checkedEventState];
        localEvenSt[ind] = data;
        updateInterestList(eventMode[ind].slug, data, localEvenSt)
    }


    const extractReqData = () => {
        let updatedData = [];
        const result = selectedInterest.map((content, id) => {
            content.data.map((o2, o2Id) => {
                updatedData.push({ ...o2, o2Id: `${o2Id}+${o2.title}` })
            })
            return true
        })

        console.warn("updatedData", result, updatedData)

        return updatedData

    }
    const handleSubmitBtn = async (e) => {
        e.preventDefault();

        if (selectedInterest.length < 1) {
            alert("You are yet to select any interest")
        }

        const result = extractReqData();
        console.warn(result)
        if (result?.length > 0) {
            await dispatch(selectedEvents(result));
            navigate('/events');
        }



    }



    return (
        <div className="m-5">
            <div className="offset-md-3 col-md-6">

                <div>
                    <h1 className="my-4 text-center">Select Areas of Interest</h1>

                    {/* List of Interest Buttons */}
                    <div className="d-inline ">

                        <div className="text-center list-btn">
                            {checkedState.length > 0 && checkedState.map((data, ind) =>
                            (
                                <button
                                    style={handleButtonColorChange(data)}
                                    onClick={() => handleSelected(ind, data, handleActiveBTN,
                                        handleInterestSel)}
                                    key={ind + eventBtnList[ind].slug} type="button" className="btn  btn-rounded btn-outline-secondary m-1">{eventBtnList[ind].title}</button>
                            ))}
                        </div>

                    </div>



                    <h3 className="my-4 text-center">Event Mode</h3>
                    {/* List of Interest Event Mode Buttons */}
                    <div className="d-inline ">
                        <div className="text-center list-btn">
                            {checkedEventState.length > 0 && checkedEventState.map((data, ind) =>
                            (
                                <button
                                    style={handleButtonColorChange(data)}
                                    onClick={() => handleEventType(ind, data, handleActiveEvent,
                                        handleActiveInterestSel)}
                                    key={ind + eventMode[ind].title} type="button" className="btn  btn-rounded btn-outline-secondary m-1">{eventMode[ind].title}</button>
                            ))}
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="text-center">
                            <button
                                onClick={(e) => handleSubmitBtn(e)}
                                type="button" className="btn  btn-outline-success col-5">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default LandingContent;