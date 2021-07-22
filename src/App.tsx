import {Avatar, Layout} from 'antd';
import React, {ComponentType, FC} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.less';
import {withSuspense} from './hoc/withSuspense';
import Sider from "antd/es/layout/Sider";
import {Content} from 'antd/lib/layout/layout';
import {AppStateType} from "./redux/redux-store";
import {connect} from "react-redux";
import {compose} from 'redux';
import Navigation from "./components/NavBar/Navigation";
import Title from "antd/es/typography/Title";
import {Footer, Header} from "antd/es/layout/layout";
import { UserOutlined } from '@ant-design/icons';
import Text from "antd/es/typography/Text";

const SearchPageContainer = React.lazy(() => import("./components/SearchPage/SearchPage"));
const ViewBookmarksContainer = React.lazy(() => import("./components/ViewBookmarks/ViewBookmarks"));

type MapStateToPropsType = {
    isFetching: boolean
}
type MapDispatchToPropsType = {}
type OwnPropsType = {}
type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

const App: FC<PropsType> = React.memo((props) => {
    return (
        <Layout className="App">
            <Header>
                <div className='flex w-full items-center justify-between h-full'>
                    <Title level={4} style={{color: 'white'}}>Image Finder</Title>
                    <Avatar icon={<UserOutlined />} size={30}/>
                </div>
            </Header>
            <Layout>
                <Sider width={300} theme={'dark'}>
                    <Navigation/>
                </Sider>
                <Content>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect to={"/search"}/>}/>

                        <Route path='/search'
                               render={withSuspense(SearchPageContainer)}/>
                        <Route path='/favourite'
                               render={withSuspense(ViewBookmarksContainer)}/>

                        <Route path='*'
                               render={() => <Redirect to={"/search"}/>}/>
                    </Switch>
                </Content>
            </Layout>
            <Footer style={{borderTop: '1px solid grey'}}>
                <div className='flex w-full items-center justify-center h-full'>
                    <Text italic={true} className='block'>Made with <span style={{color: 'rgb(255, 255, 255)'}}>❤</span> by Ilya Taldykin<br/>
                    Powered by Flickr</Text>
                </div>
            </Footer>
        </Layout>
    );
})
const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isFetching: state.search.isFetching
})
const MainApp = compose<ComponentType>(
    withRouter,
    connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>(MapStateToProps, {})
)(App)

export default MainApp;
