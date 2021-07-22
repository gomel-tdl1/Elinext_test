import React, {FC, useState} from 'react';
import {Empty, notification, Pagination} from "antd";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Search from "antd/es/input/Search";
import TokenCard from "../ViewBookmarks/TokenCard";
import {getPhotosTC, PhotoType} from "../../redux/search-reducer";
import Preloader from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    isFetching: boolean,
    photos: PhotoType[] | null,
    totalPages: number | null,
    currentPage: number,
    searchTextMemory: string
}
type MapDispatchToPropsType = {
    getPhotosTC: (text: string, currentPage: number, act: 'paginate' | 'search') => void
}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

const SearchPage: FC<PropsType> = React.memo((props) => {
    let [searchText, setSearchText] = useState<string>('');

    const handleSearch = () => {
        if(searchText){
            props.getPhotosTC(searchText, 1, 'search');
        }else{
            notification.error({
                message: 'Search Error',
                description:
                    'Please enter your request text in area.',
            });
        }
    }
    const handlePageChanged = (page: number) => {
        props.getPhotosTC(props.searchTextMemory, page, 'paginate');
    }

    return (
        <div className='flex flex-col gap-4 items-center p-4'>
            <Search onSearch={handleSearch} value={searchText} onChange={(e) => setSearchText(e.target.value)}
                    enterButton placeholder='Please enter text for search'/>
            {props.isFetching ? <Preloader height={'400px'}/>:
                <div>
                    {(props.photos && props.photos.length !== 0) &&
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='grid grid-cols-3 gap-4 pb-4' style={{height: '400px', overflowY: 'scroll'}}>
                            {props.photos.map(photo => (
                                <TokenCard title={photo.title} description={photo.description._content}
                                           photoUrlO={photo.url_o ? photo.url_o : null}
                                           photoUrlC={photo.url_c ? photo.url_c : null}
                                           photoId={photo.id} tags={photo.tags}
                                           ownerName={photo.ownername}
                                           key={photo.id}/>
                            ))}
                        </div>
                        <Pagination current={props.currentPage} total={props.totalPages || 0} pageSize={21}
                                    onChange={handlePageChanged} showSizeChanger={false}/>
                    </div>}
                    {(!props.photos || props.photos.length === 0) && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                </div>}
        </div>
    );
})

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isFetching: state.search.isFetching,
    photos: state.search.photos,
    totalPages: state.search.totalPages,
    currentPage: state.search.currentPage,
    searchTextMemory: state.search.searchTextMemory
})

const SearchPageContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(MapStateToProps, {getPhotosTC})(SearchPage)

export default SearchPageContainer;
