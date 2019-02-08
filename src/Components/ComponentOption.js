import React, { Component } from 'react'

class ComponentOption extends Component{
    render(){
        
        const selectedClass = this.props.item.name === this.props.selected[`${this.props.id}`].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        
        return <li key={this.props.id} className="feature__item">
        <div className={featureClass}
             onClick={e => this.updateFeature( this.props.id, this.props.item)}>
            { this.props.item.name }
        ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
        .format(this.props.item.cost) })
        </div>
    </li>
    }
}

export default ComponentOption