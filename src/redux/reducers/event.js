
import {
    ALL_EVENTS, SELECTED_EVENTS
} from '../constants/';

const intialState = {

    currentEvents: null,


};


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = intialState, action) {
    switch (action.type) {
        case ALL_EVENTS:
            return {
                ...state,
                currentEvents: action.payload
            };

        case SELECTED_EVENTS:
            const selectedData = Object.assign({}, state);
            selectedData.currentEvents = action.payload
            return selectedData;
        default:
            return state;
    }
}
