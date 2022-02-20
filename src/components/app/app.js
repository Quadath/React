import React from 'react';

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

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true, id: 1},
        {label: 'Goint to learn Javascript', important: false, id: 2},
        {label: 'Hi', important: false, id: 3},
    ];

    return (
    <div className="app">
        <AppHeader/>
        <div className='search-panel d-flex'>
            <SearchPanel/>
            <PostStatusFilter/>
        </div> 
        <PostList posts={data}/>
        <PostAddForm/>
    </div>
    )
}

export default App;