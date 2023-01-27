import React, { Component, Suspense } from 'react';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import Routes from '../routes/Routes';

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});

class App extends Component {
    render() {
        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                            <AdminLayout/>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;
