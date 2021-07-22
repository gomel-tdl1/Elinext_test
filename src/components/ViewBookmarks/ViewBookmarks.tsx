import React, {FC, useEffect, useState} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import Preloader from "../common/Preloader/Preloader";
import TokenCard, {PropsCardType} from "./TokenCard";
import {Empty, Pagination} from "antd";

type MapStateToPropsType = {
    isFetching: boolean
}
type MapDispatchToPropsType = {}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

const ViewBookmarks: FC<PropsType> = (props) => {
    let [photosData, setPhotosData] = useState<PropsCardType[] | null>(null)
    let [paginatedPhotos, setPaginatedPhotos] = useState<PropsCardType[] | null>(null)
    let [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        updateBookmarks()
    }, [])

    useEffect(() => {
        // @ts-ignore
        let pagTokens = paginator(photosData, currentPage)
        setPaginatedPhotos(pagTokens)
    }, [photosData, currentPage])

    function paginator(items: PropsCardType[], current_page: number, per_page_items: number = 21) {
        let page = current_page
        let per_page = per_page_items
        let offset = (page - 1) * per_page
        let paginatedItems = items?.slice(offset).slice(0, per_page_items);
        return paginatedItems
    }

    const handlePageChanged = (page: number) => {
        setCurrentPage(page)
    }

    const updateBookmarks = () => {
        let photos = [];
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (key !== null) {
                photos.push(JSON.parse(localStorage.getItem(key) as string))
            }
        }
        setPhotosData(photos);
    };
    if (props.isFetching) return <Preloader height={'490px'}/>
    return (
        <div className='flex justify-center pb-4 pt-2'>
            {(paginatedPhotos && paginatedPhotos.length !== 0) && <div className='py-6 flex flex-col gap-4'>
                <div className='grid grid-cols-3 gap-4 ' style={{height: '400px', overflowY: 'scroll'}}>
                    {paginatedPhotos?.map(photo => (
                        <TokenCard title={photo.title} description={photo.description}
                                   photoUrlO={photo.photoUrlO ? photo.photoUrlO : null}
                                   photoUrlC={photo.photoUrlC ? photo.photoUrlC : null}
                                   photoId={photo.photoId} tags={photo.tags}
                                   ownerName={photo.ownerName}
                                   key={photo.photoId} updateBookmarks={updateBookmarks}/>
                    ))}
                </div>
                <Pagination current={currentPage} total={photosData?.length} pageSize={21}
                            onChange={handlePageChanged}/>
            </div>}
            {(!paginatedPhotos || paginatedPhotos.length === 0) && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>}

        </div>
    )
}
const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isFetching: state.search.isFetching
})
const ViewTokensContainer = connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(MapStateToProps, {})(ViewBookmarks)
export default ViewTokensContainer