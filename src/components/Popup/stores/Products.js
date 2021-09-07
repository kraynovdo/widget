import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
   name: 'product',
   initialState: {
      items: [],
      filter: {},
      source: null
   },
   reducers: {
      changeItems: {
         reducer(state, action) {
            state.items = action.payload.items;
         },
         prepare(items) {
            return {
               payload: {
                  items
               }
            };
         }
      },
      changeFilter: {
         reducer(state, action) {
            state.filter[action.payload.fieldName] = action.payload.value;
            if (state.source) {
               state.items = state.source.query(state.filter);
            }
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
      resetFilter(state) {
         Object.keys(state).forEach((key) => {
            state[key] = undefined;
         });
      }
   }
});
export const actions = productSlice.actions;
export default productSlice;
