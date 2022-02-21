import React, {Component} from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';
import  '../app-header/app-header.css';
import '../search-panel/search-panel.css';
import '../post-status-filter/post-status-filter.css';
import '../post-list-item/post-list-item.css';
import '../post-list/post-list.css';
import '../post-add-form/post-add-form.css';

import styled from 'styled-components';

const AppBlock = styled.div`margin: 0 auto; max-width: 800px`

// const StyledAppBlock = styled(AppBlock)`
    // background-color: grey `

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'Goint to learn Javascript', important: false, id: 2},
                {label: 'Hi', important: false, id: 3},
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const changed = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: changed
            }
        })
    }
    addItem(body) {
        const newItem = {
            label: body,
            importand: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const changed = [...data, newItem];
            return {
                data: changed
            }
        })
    }
    render() {
        return (
    <AppBlock>
        <AppHeader/>
        <div className='search-panel d-flex'>
            <SearchPanel/>
            <PostStatusFilter/>
        </div> 
        <PostList posts={this.state.data}
            onDelete={this.deleteItem}/>
        <PostAddForm
            onAdd={this.addItem}/>
    </AppBlock>
    ) }
}

// export default App;