import React, {Component, cloneElement} from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

import Navbar from './Navbar';

class AppContainer extends Component {
    render() {
        const {tabsInfo, tabsInfoPending, location: {pathname}, children} = this.props;

        const tabsList = (tabsInfo && tabsInfo.length) ? tabsInfo : null;
        const currentPage = pathname.replace(/^\//, '');

        return (
            <div>
                <i className={classNames('loader', {'loader_hide': !tabsInfoPending})} />

                {tabsList && <Navbar list={tabsList} activeItemId={currentPage}/>}

                {cloneElement(children, this.props)}
            </div>
        )
    }
}

export default connect(state => ({
    tabsInfo: state.tabs.tabsInfo,
    tabsInfoPending: state.tabs.pending,
}), null)(AppContainer);