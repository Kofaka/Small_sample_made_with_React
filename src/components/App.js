import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ActionCreators from '../actions/actionCreators';

import AppContainer from './AppContainer';

import './App.css';

const mapStateToProps = state => ({tabsInfo: state.tabsInfo});

const mapDispatchToProps = dispatch => ({actions: bindActionCreators(ActionCreators, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);