import * as api from '../api';

export const getItems = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        
        dispatch({type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createItem = () => async (dispatch) =>{
    try {
        const { data } = await api.createItem(item);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}