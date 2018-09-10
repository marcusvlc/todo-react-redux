import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { deleteTask } from '../../actions';
import {connect} from 'react-redux'

class Task extends Component {
    render(){
        return(
            <tr>
                <td>
                    {this.props.id} - {this.props.task}
                </td>

                <td>
                    <button onClick={() => {this.props.deleteTask(this.props.id)}}>Excluir Tarefa</button>
                </td>

            </tr>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteTask}, dispatch)
}

export default connect(() =>{return{}}, mapDispatchToProps)(Task)
