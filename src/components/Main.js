import React, {Component} from 'react';
import {connect} from 'react-redux';
import {history} from '../store';

class Main extends Component {
    constructor(props) {
        super(props);

        this.goTo = this.goTo.bind(this);
    }

    componentDidMount() {
        const {tabsInfo} = this.props;

        if (tabsInfo && tabsInfo.length) this.goTo(tabsInfo[0].id);
    }

    componentDidUpdate() {
        const {tabsInfo} = this.props;

        if (tabsInfo && tabsInfo.length) this.goTo(tabsInfo[0].id);
    }

    goTo(link) {
        history.push(link);
    }

    render() {
        return (
            <div>
                <h1>…Main Page…</h1>
            </div>
        )

    }
}

export default connect(state => ({tabsInfo: state.tabs.tabsInfo}))(Main);
