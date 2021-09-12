const { createAction } = require("@reduxjs/toolkit");

export const apiCallBegan = createAction("api/callBegan");
export const apiCallSucceded = createAction("api/callSucceded");
export const apiRequestFailed = createAction("api/requestFailed");
