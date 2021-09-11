const { createAction } = require("@reduxjs/toolkit");

export const apiCallBegan = createAction("apiCallBegan");
export const apiCallSucceded = createAction("apiCallSucceded");
export const apiRequestFailed = createAction("apiRequestFailed");
