import React, {Component} from 'react';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
    }
    onValueChange(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    render() {
        return (
            <input className='form-control search-input'
            type="text"
            placeholder='Поиск по записям'
            onChange={this.onValueChange}></input>
        )
    }
}
