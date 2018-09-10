import React, {Component} from 'react';
import {connect} from 'react-redux';
import {history} from '../store';

import DummyTable from './DummyTable';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const {tabsInfo, location: {pathname}} = this.props;
        const currentPage = pathname.replace(/^\//, '');

        if (tabsInfo && tabsInfo.length && !currentPage.length) history.push(tabsInfo[0].id);
    }

    render() {
        const {tabsInfo, tabsInfoPending, location: {pathname}} = this.props;
        const tabsList = (tabsInfo && tabsInfo.length && !tabsInfoPending) ? tabsInfo : null;
        const currentPage = pathname.replace(/^\//, '');

        const getCurrentTabData = () => {
            let res = null;
            if (tabsList) {
                tabsList.map(item => {
                    if (item.id === currentPage) {
                        res = <DummyTable data={item}/>;
                    }
                });
            }
            return res;
        };

        return (
            <div>
                {(!tabsInfoPending && tabsList) && getCurrentTabData()}
            </div>
        )

    }
}

export default connect(state => ({
    tabsInfo: state.tabs.tabsInfo,
    tabsInfoPending: state.tabs.pending,
}))(Main);
