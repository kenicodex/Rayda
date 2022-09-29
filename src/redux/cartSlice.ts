import { createSlice } from "@reduxjs/toolkit";
interface Edit {
    id: number;
    number: number
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: [], 
    reducers: {
        addcart: (state: Array<any>, action) => {
            let check = state.filter(x => x.id === action.payload.id)
            if (check.length > 0) {
                alert('already in cart')
            } else {
                const additionals = { ...action.payload, number: 1 }
                state.push(additionals)
            }
        },
        increase: (state, action) => {
            state.map((edit: Edit) => {
                if (edit.id === action.payload.id) {
                    edit.number += 1
                }

                return state
            })
            return state
        },
        decrease: (state, action) => {
            state.map((edit: Edit) => {
                if (edit.id === action.payload.id) {
                    edit.number -= 1
                }
                return state
            })
            return state
        },
        deletecart: (state, action) => {
            
        }
    }
})
export const { addcart, increase, decrease, deletecart } = cartSlice.actions;

export default cartSlice.reducer;