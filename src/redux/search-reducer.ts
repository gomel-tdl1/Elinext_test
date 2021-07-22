import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./redux-store";
import {photosAPI} from "../API/api";

export const actionsSearch = {
    setCurrentPage: (page: number) => ({
        type: 'SET_CURRENT_PAGE',
        page
    }) as const,
    setTotalPages: (totalPages: number) => ({
        type: 'SET_TOTAL_PAGES',
        totalPages
    }) as const,
    setPhotos: (photos: PhotoType[]) => ({
        type: 'SET_PHOTOS',
        photos
    }) as const,
    setIsFetching: (isFetching: boolean) => ({
        type: 'SET_IS_FETCHING',
        isFetching
    }) as const,
    setSearchTextMemory: (searchText: string) => ({
        type: 'SET_SEARCH_TEXT_MEMORY',
        searchText
    })as const
}

export type PhotoType = {
    id: string,
    owner: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
    ispublic: number,
    isfriend: number,
    isfamily: number,
    license: string,
    description: {
        _content: string
    },
    ownername: string,
    tags: string,
    originalsecret?: string,
    originalformat?: string,
    url_o?: string,
    height_o?: number,
    width_o?: number,
    "url_c"?: string,
    "height_c"?: number,
    "width_c"?: number
}

const initialState = {
    isFetching: false,
    currentPage: 1,
    totalPages: null as number | null,
    photos: null as PhotoType[] | null,
    searchTextMemory: ''
};
export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actionsSearch>

const searchReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page
            };
        case 'SET_TOTAL_PAGES':
            return {
                ...state,
                totalPages: action.totalPages
            };
        case 'SET_PHOTOS':
            return {
                ...state,
                photos: action.photos
            };
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            };
        case 'SET_SEARCH_TEXT_MEMORY':
            return {
                ...state,
                searchTextMemory: action.searchText
            };

        default:
            return {...state};
    }
};

type ThunkActionType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const getPhotosTC = (text: string, currentPage: number, act: 'paginate' | 'search'): ThunkActionType => async (dispatch) => {
    dispatch(actionsSearch.setIsFetching(true))
    let data = await photosAPI.getPhotosData(text, currentPage)
    data = data.data.photos;
    console.log(data)
    if(act === 'search') dispatch(actionsSearch.setSearchTextMemory(text))
    dispatch(actionsSearch.setCurrentPage(currentPage))
    dispatch(actionsSearch.setTotalPages(data.total))
    dispatch(actionsSearch.setPhotos(data.photo))
    dispatch(actionsSearch.setIsFetching(false))
}

export default searchReducer;