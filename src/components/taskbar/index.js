import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTask} from '../../actions/index'

class TaskBar extends Component {
    render() {
        return(
            <div>
              <input type="text" ref="task" placeholder="Adicione uma tarefa"/>
              <button onClick={() => this.props.addTask(this.refs.task.value)}>Adicionar Tarefa</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTask}, dispatch)
}

export default connect(() =>{}, mapDispatchToProps)(TaskBar)