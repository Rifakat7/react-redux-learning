import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'



function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}


// here we are conecting store by mapStateToProps 
const mapStateToProps = state=>{
  return {
    numOfCakes:state.numOfCakes   ////so heer we selected nm of cakes by this syntax.
  }
}

//now dispatch action
const mapDispatchToProps = dispatch=>{
  return {
    buycake:()=>dispatch(buyCake())
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps)
  (CakeContainer)