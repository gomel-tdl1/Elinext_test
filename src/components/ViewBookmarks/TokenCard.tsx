import {Button, Card, Image, Modal, notification} from "antd";
import React, {FC, useEffect, useState} from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

export type PropsCardType = {
    photoId: string
    ownerName: string
    title: string
    description: string,
    tags: string,
    photoUrlO: string | null,
    photoUrlC: string | null,
    updateBookmarks?: () => void
}

const TokenCard: FC<PropsCardType> = React.memo((props) => {
    let [visible, setVisible] = useState<boolean>(false);
    let [hiddened, setHiddened] = useState<boolean>(!!localStorage[props.photoId])

    const handleCancel = () => {
        setVisible(false)
    }
    const handleAddToBookmark = () => {
        if(!localStorage[props.photoId]){
            localStorage[props.photoId] = JSON.stringify({...props});
            setHiddened(!!localStorage[props.photoId])
            if(props.updateBookmarks) props.updateBookmarks();
        }else{
            notification.error({
                message: 'Bookmark Error',
                description:
                    'You already have this bookmark.',
            });
        }
    }
    const handleDeleteFromBookmark = () => {
        if(localStorage[props.photoId]){
            delete localStorage[props.photoId];
            setHiddened(!!localStorage[props.photoId])
            if(props.updateBookmarks) props.updateBookmarks();
        }else{
            notification.error({
                message: 'Bookmark Error',
                description:
                    'You havent this bookmark.',
            });
        }
    }

    return (
        <>
            <Card
                hoverable
                style={{width: 300}}
                onClick={() => setVisible(true)}
                cover={<img alt="example"
                            src={props.photoUrlC || props.photoUrlO || 'https://znaiwifi.com/wp-content/uploads/2018/01/hqdefault.jpg'}/>}
            >
                <div className='flex flex-col gap-8'>
                    <Title level={4}>{props.title}</Title>
                    <div>
                        <Text type='secondary'>Click to card for view more information.</Text>
                    </div>
                </div>
            </Card>
            <Modal
                visible={visible}
                title={props.title.length > 50 ? props.title.slice(0, 50) + ' ...' : props.title}
                onCancel={handleCancel}
                width={1000}
                footer={[
                    <Button key="addToFav" onClick={handleAddToBookmark} hidden={hiddened}>Add to bookmark</Button>,
                    <Button key="remFav" onClick={handleDeleteFromBookmark} hidden={!hiddened}>Delete from bookmark</Button>,
                    <Button key="back" onClick={handleCancel}>
                        Close
                    </Button>
                ]}
            >
                <div className='flex flex-col items-start gap-2'>
                    <Text italic={true} className='block'>Owner: {props.ownerName}</Text>
                    <div className='flex gap-4 items-start justify-center'>
                        {(props.photoUrlO || props.photoUrlC) &&
                        // @ts-ignore
                        <Image width={300} src={props.photoUrlO || props.photoUrlC} preview={false}/>}
                        {props.description && <div style={{width: '600px'}}>
                            <Text>{props.description}</Text>
                        </div>}
                    </div>
                    <div className='flex flex-wrap justify-center'>
                        {props.tags && props.tags.split(' ').map((tag, i) => <Text keyboard
                                                                              className='block' key={i}>{tag}</Text>)}
                    </div>

                </div>
            </Modal>
        </>
    )
})
export default TokenCard