import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import LandingPage from './Pages/LandingPage';
import React, { Component } from 'react';
import Navbar from './Components/NavBar';
import { CSSTransition } from 'react-transition-group';
import { CircularProgress } from '@material-ui/core';
import { connect } from 'react-redux';

// Here I am using lazy loading which is code splitting which will only loads components when needed and
// hopefully should speed up my application

const Account = lazy(() => import('./Pages/Account'));
const AdminProducts = lazy(() => import('./Pages/AdminProducts'));
const AdminOrders = lazy(() => import('./Pages/AdminOrders'));
const SignIn = lazy(() => import('./Pages/SignIn'));
const SignUp = lazy(() => import('./Pages/SignUp'));
const Product = lazy(() => import('./Pages/Product'));
const ShoppingBasket = lazy(() => import('./Pages/ShoppingBasket'));
const MainCategory = lazy(() => import('./Pages/MainCategory'));
const NotFound = lazy(() => import('./Components/NotFound'));
const Products = lazy(() => import('./Pages/Products'));
const OrderDetails = lazy(() => import('./Pages/OrderDetails'));
const AdminEditProduct = lazy(() => import('./Pages/AdminEditProduct'));
const AdminCreateProduct = lazy(() => import('./Pages/AdminCreateProduct'));
const Checkout = lazy(() => import('./Pages/Checkout'));

class App extends Component {
  state = {
    showArrowToTop: false,
  };
  componentDidMount = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 122) {
        this.setState({ showArrowToTop: true });
      }
      if (window.innerHeight - 122 < window.innerHeight - window.scrollY) {
        this.setState({ showArrowToTop: false });
      }
    });

    // in here I need to make a back-end call which gets all the categories and sub categories and puts them into
    //redux so this can be used by the category menus
  };

  render() {
    return (
      <div>
        <div className='App'>
          {this.props.loadingUser ||
          this.props.loadingProducts ||
          this.props.loadingOrders ? (
            <div className={'generic-loading-container'}>
              <CircularProgress
                style={{
                  color: '#f1c40f',
                  size: '4rem',
                }}></CircularProgress>
            </div>
          ) : null}
          <Router>
            <Navbar />
            <Suspense
              fallback={
                <div className='spinner-container'>
                  <CircularProgress
                    style={{
                      color: '#f1c40f',
                      size: '4rem',
                    }}></CircularProgress>
                </div>
              }>
              <Switch>
                <Route exact path='/' component={LandingPage} />
                {/* {below will redirect the user to the sign in screen if they click on the 
                account button and dont have one} */}
                <Route exact path='/sign-in' component={SignIn} />
                <Route exact path='/sign-up' component={SignUp} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/admin' component={AdminProducts} />
                <Route exact path='/checkout' component={Checkout} />
                <Route
                  exact
                  path='/admin/create-product'
                  component={AdminCreateProduct}
                />
                <Route
                  exact
                  path='/admin/product/:id'
                  component={AdminEditProduct}
                />

                <Route exact path='/admin-orders' component={AdminOrders} />
                <Route
                  exact
                  path='/admin/product/id'
                  component={AdminEditProduct}
                />
                <Route exact path='/order/:id' component={OrderDetails} />
                <Route exact path='/product/:id' component={Product} />
                <Route
                  exact
                  path='/shopping-basket'
                  component={ShoppingBasket}
                />
                <Route exact path='/:category/:type' component={Products} />
                <Route exact path='/:category' component={MainCategory} />

                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </div>
        <CSSTransition
          in={this.state.showArrowToTop}
          onClick={() => window.scrollTo(0, 0)}
          timeout={500}
          classNames='menuarrow'
          unmountOnExit>
          <div className='menuarrow'>
            <i className='fas fa-arrow-circle-up'></i>
          </div>
        </CSSTransition>
      </div>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingUser: state.user.loading,
    loadingProducts: state.products.loading,
    loadingOrders: state.orders.loading,
  };
};

export default connect(mapStateToProps)(App);
