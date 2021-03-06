export const reducer = (state, action) =>{
    
    if(action.type === 'FETCH_DATA'){
        let isOver = false;
        if(!action.payload.nextUrl){
            isOver = true;
        }
        const newData = [...state.data, ...action.payload.pokemons]
        return{
            ...state,
            data: newData,
            isLoading: false,
            nextUrl: action.payload.nextUrl,
            isOver: isOver,
            isError: false,
            isLoadMore: false,
        }
    }
    else if(action.type === 'RESET_POKEMONS'){
        return{
            ...state,
            filterResult: null,
            isLoading: false,
            isSearching: false,
            isError: false,
            isLoadMore: false,
        }
    }
    else if (action.type === 'FILTERING'){
        return{
            ...state,
            filterResult: [action.payload],
            isSearching: false,
            isError: false,
        }
    }
    else if (action.type === 'SEARCHING'){
        return{
            ...state,
            filterResult: [],
            isSearching: true,
        }
    }
    else if (action.type === 'START_LOAD'){
        return{
            ...state,
            isLoadMore: true,
        }
    }
    else if(action.type === 'NOT_FOUND'){
        return{
            ...state,
            filterResult: [],
            isSearching: false,
            isError: 1,
        }
    }
    else if(action.type === 'ERROR'){
        return{
            ...state,
            isLoading: false,
            isError: -1
        }
    }
    else{
        return {
            ...state
        }
    }
}