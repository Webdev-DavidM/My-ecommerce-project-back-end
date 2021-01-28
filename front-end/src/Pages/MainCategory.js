/* NPM packages */

import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/* CSS */

import styles from './MainCategory.module.css';

/* Components */

import ImageCarousel from '../Components/UIelements/ImageCarousel';

/* Action creators */
import { getProducts } from '../Actions/products.js';

class MainCategory extends Component {
  componentDidMount = () => {
    let { category } = this.props.match.params;
    this.props.getUserProducts(category);
  };

  render() {
    return (
      <div className={styles.maincategory}>
        <ImageCarousel
          url={`${process.env.PUBLIC_URL}/images/landing-page-main-image.jpg`}
        />
        <div className={styles.categoryheader}>
          <p>
            DM sports / <strong>Cycle</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            doloribus fugiat ab nulla? Veniam expedita a perferendis optio, aut
            assumenda saepe, eaque dicta atque sed minima officia beatae numquam
            iste modi perspiciatis nemo sint nisi iusto quia voluptates
            molestias ad? Iure labore nisi quas delectus tempora ipsa corrupti
          </p>
        </div>
        <div className={styles.categorybody}>
          <aside>
            <p>Bikes</p>
            <hr></hr>
            <ul>
              <li>
                <Link to=''>Road Bikes</Link>
              </li>
              <li>
                <Link to=''>Mountain Bikes</Link>
              </li>
              <li>
                <Link to=''>Hybrid bikes</Link>
              </li>
            </ul>
          </aside>
          <main>
            <div className={styles.category}>
              <img
                src={`${process.env.PUBLIC_URL}/images/cycle-slide1.jpg`}
                alt=''
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/cycle-slide1.jpg`}
                alt=''
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/cycle-slide1.jpg`}
                alt=''
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/cycle-slide1.jpg`}
                alt=''
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/cycle-slide1.jpg`}
                alt=''
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/cycle-slide1.jpg`}
                alt=''
              />
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProducts: (category) => dispatch(getProducts(category)),
  };
};

export default connect(null, mapDispatchToProps)(MainCategory);
