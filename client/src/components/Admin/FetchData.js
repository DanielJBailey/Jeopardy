import React from 'react';
import CategoryShow from './CategoryShow';
import Admin from './Admin';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {getCategories} from "../../reducers/categories";

class FetchData extends React.Component {
    state = { loaded: false };

    componentDidMount() {
        this.props.dispatch(getCategories(this.setLoaded));
    }

    setLoaded = () => {
        this.setState({ loaded: true })
    }

    render() {
        const {loaded} = this.state;
        if (loaded) {
            return(
                <Switch>
                    <Route exact path = "/admin" component={Admin} />
                    <Route exact path = "/admin/category/:id" component={CategoryShow} />
                </Switch>
            )
        } else {
            return ("Please wait while categories are loaded...")
        }
        
    }
}

export default connect()(FetchData);
    