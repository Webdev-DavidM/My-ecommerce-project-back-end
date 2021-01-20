import React, { Component } from 'react';
import styles from './Product.module.css';
import ProductImageCarousel from '../Components/UIelements/ProductImageCarousel';
import Reviews from '../Components/UIelements/Reviews';

export default class Product extends Component {
  state = {
    size: '',
    dropdownSelected: false,
    quantity: 0,
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    let dropdown = (
      <>
        <option>small</option>
        <option>medium</option>
        <option>large</option>
      </>
    );
    return (
      <div className={styles.product}>
        <p className={styles.title}>Vitus road bike</p>
        <Reviews />
        <hr></hr>
        <ProductImageCarousel />

        <div className={styles.productinfo}>
          <div className={styles.column1}>
            {' '}
            <p className={styles.price}>£999.99</p>
            <p>Colour: Black Quartz</p>
            <div></div>
            <div className={styles.sizecontainer}>
              <form
                onClick={() =>
                  this.setState((prevState) => ({
                    dropdownSelected: !prevState.dropdownSelected,
                  }))
                }>
                <span>Please select</span>{' '}
                {!this.state.dropdownSelected && (
                  <span>
                    <i class='fas fa-arrow-down'></i>
                  </span>
                )}
                {this.state.dropdownSelected && dropdown}
              </form>
            </div>
            <br></br>
            <div className={styles.quantity}>
              <form>Quantity:</form>
              <button
                className={styles.qtybtn}
                onClick={() =>
                  this.setState((prevState) => ({
                    quantity: prevState.quantity - 1,
                  }))
                }>
                -
              </button>
              <input type='input' value={this.state.quantity}></input>
              <button
                className={styles.qtybtn}
                onClick={() =>
                  this.setState((prevState) => ({
                    quantity: prevState.quantity + 1,
                  }))
                }>
                +
              </button>
              <br></br>
            </div>
            <button className={styles.addtocartbtn}>
              {' '}
              <i
                className='fas fa-shopping-cart'
                style={{ width: '1rem', height: '1rem' }}>
                {' '}
              </i>
              &nbsp; &nbsp;Add to Basket
            </button>
          </div>
          <div className={styles.column2}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad
              pariatur nemo saepe, distinctio, maiores sapiente ea consequuntur
              odio sit, voluptatibus iste aspernatur quis nisi! Expedita, unde!
              Minus deleniti culpa odit. Praesentium eligendi illo doloremque
              nisi perferendis
            </p>
          </div>
        </div>
      </div>
    );
  }
}
