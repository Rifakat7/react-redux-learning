import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { buyCake } from '../redux';

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes) //so we have accessed the numofcakes in the redux state and stored it in a varibale.
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Num of cakes -{numOfCakes} </h2>
        <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer;