import { createSlice } from "@reduxjs/toolkit";

const recordSlice = createSlice({
   name: 'record',
   initialState: {
      record: {},
      source: null
   },
   reducers: {
      create(state: any) {
         if (state.source) {
            state.record = state.source.create();
         }
      },

      update: {
         reducer(state: any, action) {
            if (state.source) {
               state.source.update(action.payload.record);
            }
         },
         prepare(record): any {
            return {
               payload: {
                  record
               }
            };
         }
      },

      read: {
         reducer(state: any, action) {
            if (state.source) {
               state.record = state.source.read(action.payload.key);
            }
         },
         prepare(key): any {
            return {
               payload: {
                  key
               }
            };
         }
      },

      delete: {
         reducer(state: any, action) {
            if (state.source) {
               state.source.delete(action.payload.key);
            }
         },
         prepare(key): any {
            return {
               payload: {
                  key
               }
            };
         }
      },

      changeField: {
         reducer(state: any, {payload: {fieldName, value}}) {
            state.record[fieldName] = value;
         },
         prepare(fieldName, value): any {
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
         prepare(record): any {
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
