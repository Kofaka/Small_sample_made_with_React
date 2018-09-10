import React, {Component, cloneElement} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import {getTabsInfo} from '../actions/api';

import Navbar from './Navbar';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTabsInfo();
    }

    render() {
        const {tabsInfo, tabsInfoPending, location: {pathname}, children} = this.props;

        const tabsList = (tabsInfo && tabsInfo.length) ? tabsInfo : null;
        const currentPage = pathname.replace(/^\//, '');

        return (
            <div>
                <i className={classNames('loader', {'loader_hide': tabsInfo.length && !tabsInfoPending})}/>

                {tabsList && <Navbar list={tabsList} activeItemId={currentPage}/>}

                {cloneElement(children, this.props)}
            </div>
        )
    }
}

export default connect(
    state => ({
        tabsInfo: state.tabs.tabsInfo,
        tabsInfoPending: state.tabs.pending,
    }),
    dispatch => ({
        getTabsInfo: () => dispatch(getTabsInfo())
    })
)(AppContainer);