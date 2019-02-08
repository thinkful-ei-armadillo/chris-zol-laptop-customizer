import React, { Component } from 'react'
import ComponentOption from './components/ComponentOption'
class ComponentList extends Component {

    render () {
        return (
            <div className="feature" key={key}>
            <div className="feature__name">{key}</div>
            <ul className="feature__list">
            { Object.keys(this.props.features).map(key => 
                {this.props.features[key].map((item, index)=>
                    { <ComponentOption 
                        key= {index} 
                        id= {index} 
                        item= {item} 
                        selected ={props.selected[key]} 
                        updateFeature ={this.props.updateFeature} /> })
                })
            }
            </ul>
        </div>)
    }
}

export default ComponentList