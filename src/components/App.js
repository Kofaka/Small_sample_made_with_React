import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions/api';

import AppContainer from './AppContainer';

import './App.css';

const mapStateToProps = state => ({tabsInfo: state.tabsInfo});

const mapDispatchToProps = dispatch => ({actions: bindActionCreators(Actions, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);