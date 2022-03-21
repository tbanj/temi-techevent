import * as actionTypes from "../constants/index";

export const storeEvents = (data) => {
    return { type: actionTypes.ALL_EVENTS, payload: data };
}

export const selectedEvents = (data) => {
    return { type: actionTypes.SELECTED_EVENTS, payload: data };
}