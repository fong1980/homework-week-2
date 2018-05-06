import React, { Component } from "react"
import "./App.css"
import CheckoutButton from "./components/CheckoutButton"
import CartItem from "./components/CartItem"
import Clock from "react-live-clock"

let total
const products = [
  { id: 1, name: "curry", price: 637, quantity: 1 },
  { id: 2, name: "ketchap", price: 44, quantity: 0 },
  { id: 3, name: "mayo", price: 0.4, quantity: 0 }
]

class App extends Component {
  state = { products, totalChekout: 0 } //state begin

  incrementQuantity = x => {
      //console.log(x)
    this.setState({
      products: this.state.products.map(item=>{
            if(item.id !==x)return item
             console.log(item.quantity)
            return {...item, ...item.quantity+1}
          })
    })

    //-----------waarom werkt het niet?
    // this.setState({
    //   products: this.state.products.map(function(item) {
    //     if (item.id === x) {
    //       //console.log('bam')
    //       item.quantity += 1
    //       console.log("bingo")
    //       return
    //       //console.log(item.quantity)
    //     } else {
    //       item.quantity += 0
    //       return
    //     }
    //   })})
    //-------------waarom werkt niet?

  }   //changing the state only once, afterward error

  calcTotal = () => {
    //console.log(this.state.totalChekout) //check of iets in state staat
    const reducer = (a, b) => a + b

    total = products.map(item => item.price * item.quantity).reduce(reducer)
    //console.log(total)
    this.setState({
      totalChekout: total //zet de waarde in de state!
    })
    //check of het total klopt
    //console.log(this.state.totalChekout)
  }

  render() {
    ;<Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />

    return (
      <div className="App">
        <ul>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Pacific"} />
          {products.map((item, index) => (
            <CartItem
              {...item}
              onPlusClick={() => this.incrementQuantity(item.id)}
            />
          ))}
        </ul>
        <CheckoutButton {...total} checkTotal={this.calcTotal} />
        {this.state.totalChekout}
      </div>
    )
  }
}

export default App
