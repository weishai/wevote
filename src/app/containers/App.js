import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  IconButton,
  IconMsg,
  IconArticle,
  IconCell
} from 'react-weui';
import {
  Tab,
  TabBody,
  TabBar,
  TabBarItem,
  TabBarIcon,
  TabBarLabel
} from '../components/tab'

import '../../www/app.css'

class App extends Component {

  state = {
    tab:0
  }

  render() {
    const {children} = this.props;

    return (
        <Tab>
          <div className="page">{children}</div>
          <TabBar>
              <TabBarItem
                  active={this.state.tab == 0}
                  onClick={e=>this.setState({tab:0})}
                  icon={<img src={IconButton}/>}
                  label="微投票"
              />
              <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                  <TabBarIcon>
                      <img src={IconMsg}/>
                  </TabBarIcon>
                  <TabBarLabel>我</TabBarLabel>
              </TabBarItem>
          </TabBar>
        </Tab>
    );
  }
}

// App.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App)

export default App