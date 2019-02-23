
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import addBook from './book/addBook';
import listBook from './book/listBook';
import detailBook from './book/detailBook';
class App extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <h1>Book Store</h1>
                </div>
                <div className='main'>
                    <Switch>
                        <Route exact path='/' component={listBook} />
                        <Route path='/book/create' component={addBook} />
                        <Route path='/book/:id' component={detailBook} />
                    </Switch>
                </div>
            </div>)
    }
}
export default App;
