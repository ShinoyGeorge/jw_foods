import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        value: [],
    },
    reducers: {
        load(state, action) {
            state.value = action.payload;
        },
    },
});

export const fetchConfigurations = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'http://127.0.0.1:5000/configurations'
            );
            if (!response.ok) {
                throw new Error('Could not fetch products.');
            }
            const data = await response.json();
            return data;
        };

        try {
            const configData = await fetchData();
            dispatch(adminActions.load(configData));
        } catch (error) {
            console.error(error);
        }
    };
};

export const addConfigurations = (coefficient) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'http://127.0.0.1:5000/configurations/1',
                {
                    method: 'PUT',
                    body: JSON.stringify({ price_coefficient: coefficient }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            if (!response.ok) {
                throw new Error('Could not fetch products.');
            }
            const data = await response.json();
            return data;
        };

        try {
            const configData = await fetchData();
            dispatch(adminActions.load(configData));
        } catch (error) {
            console.error(error);
        }
    };
};

export const adminActions = adminSlice.actions;
export default adminSlice.reducer;
