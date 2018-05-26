import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from 'scenes/Header';
import Home from 'scenes/Home';
import Footer from 'scenes/Footer';
import BookNow from 'scenes/BookNow';

import store from './src/store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path='/' component={Home} />
                        <Route path='/book-now' component={BookNow} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </Provider>            
        );
    }
}

export default App;