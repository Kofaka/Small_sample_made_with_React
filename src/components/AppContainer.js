import React, {Component, cloneElement} from 'react';
import {connect} from 'react-redux';

import Navbar from './Navbar';

class AppContainer extends Component {
    render() {
        const {tabsInfo, location: {pathname}, children} = this.props;

        const tabsList = (tabsInfo && tabsInfo.length) ? tabsInfo : null;
        const currentPage = pathname.replace(/^\//, '');

        return (
            <div>
                {tabsList && <Navbar list={tabsList} activeItemId={currentPage}/>}
                {cloneElement(children, this.props)}
            </div>
        )
    }
}

export default connect(state => ({tabsInfo: state.tabs.tabsInfo}), null)(AppContainer);