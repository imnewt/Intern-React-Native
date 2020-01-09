import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0
    }
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    this.setState({
      cartItems: this.state.cartItems.concat(product)
    });
  }

  // addToCart(product) {
  //   let check = this.state.cartItems.find(item => item.id === product.id);
  //   if(!check) {
  //       const productWithQuantity = { ...product, quantity: 1 };
  //       this.setState({
  //           cartItems: [...this.state.cartItems, productWithQuantity],
  //           total: this.state.total += 1
  //           //parseFloat(product.price.split('.').join(''))
  //       });
  //   } else {
  //       this.countIncrease(product);
  //   }
  // }

  //getTotal = () => this.state.total

//   countIncrease(product) {
//     this.setState({
//         cartItems: this.state.cartItems.map(item => {
//             if (item.id === product.id) {
//                 item.quantity = item.quantity + 1;
//             }
//             return item;
//         }),
//         sum: this.state.sum += parseFloat(product.price.split('.').join(''))
//     });
// }
//   countDecrease(book) {
//     this.setState({
//       cartItems: this.state.cartItems.map(item => {
//         if (item.name.toLowerCase() === book.name.toLowerCase()) {
//           item.count = item.count - 1;
//         }
//         return item;
//       }),
//       sum: this.state.sum -= parseFloat(book.price)
//     });
//   }
// removeFromCart(product){
//     if(product.quantity >= 2) {
//         this.setState({
//             cartItems: this.state.cartItems.map(item => {
//                 if (item.name.toLowerCase() === product.name.toLowerCase()) {
//                     item.quantity = item.quantity - 1;
//                 }
//                 return item;
//             }),
//             sum: this.state.sum -= parseFloat(product.price.split('.').join(''))
//         });
//     } else {
//         let i = 0;
//         this.state.cartItems.filter( item => {
//             i++;
//             if(item.id === product.id) {
//                 return this.setState({
//                     cartItems: this.state.cartItems.splice(i, 1),
//                     sum: this.state.sum -= parseFloat(product.price.split('.').join(''))
//                 })
//             }
//         })
//     }
// }


  render() {
    return (
      <CartContext.Provider
        value={{
            cartItems: this.state.cartItems,
            addToCart: this.addToCart,
            getTotal: this.getTotal
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
