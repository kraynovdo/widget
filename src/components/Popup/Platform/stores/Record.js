import { createSlice } from "@reduxjs/toolkit";

const recordSlice = createSlice({
   name: 'record',
   initialState: {
      record: {},
      source: null
   },
   reducers: {
      create(state, action) {
         if (state.source) {
            state.record = state.source.create();
         }
      },

      update: {
         reducer(state, action) {
            if (state.source) {
               state.source.update(action.payload.record);
            }
         },
         prepare(record) {
            return {
               payload: {
                  record
               }
            };
         }
      },

      read: {
         reducer(state, action) {
            if (state.source) {
               state.record = state.source.read(action.payload.key);
            }
         },
         prepare(key) {
            return {
               payload: {
                  key
               }
            };
         }
      },

      delete: {
         reducer(state, action) {
            if (state.source) {
               state.source.delete(action.payload.key);
            }
         },
         prepare(key) {
            return {
               payload: {
                  key
               }
            };
         }
      },

      changeField: {
         reducer(state, {payload: {fieldName, value}}) {
            state.record[fieldName] = value;
         },
         prepare(fieldName, value) {
            return {
               payload: {
                  fieldName,
                  value
               }
            };
         }
      },

      changeRecord: {
         reducer(state, {payload: {record}}) {
            state.record = record;
         },
         prepare(record) {
            return {
               payload: {
                  record
               }
            };
         }
      },

      changeSource(state, action) {
         state.source = action.payload;
      }
   }
});

export default recordSlice;
export const actions = recordSlice.actions;