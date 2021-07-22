import React, {FC, useEffect} from 'react';
import {Menu} from "antd";
import {NavLink, useLocation} from "react-router-dom";
import {FileSearchOutlined, StarOutlined} from "@ant-design/icons/lib";

type PropsType = {}
const Navigation: FC<PropsType> = React.memo((props) => {
    let location = useLocation();
    let selectedKey = location.pathname.toLowerCase().split('/')[1];
    useEffect(() => {
        selectedKey = location.pathname.toLowerCase().split('/')[1];
    }, [location])

    return (
        <Menu
            selectedKeys={[selectedKey]}
            mode={'vertical'}
            theme={'dark'}
        >
            <Menu.Item key="search" icon={<FileSearchOutlined />}>
                <NavLink to={`/search`}>Search</NavLink>
            </Menu.Item>
            <Menu.Item key="favourite" icon={<StarOutlined />}>
                <NavLink to={`/favourite`}>Bookmarks</NavLink>
            </Menu.Item>
        </Menu>

    );
});

export default Navigation;