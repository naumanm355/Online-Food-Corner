import {cheff_Actions} from '../constants/Cheff'
import {cheff_Status} from '../constants/Cheff'
 const data_initialState = {
  cheff_Status: cheff_Status.cheff_Create.SHOWCHEFF,
    cheffList:[]
  };
  export default function(state = data_initialState, action) {
    switch(action.type) {
      
        case cheff_Actions.cheff_Create.ADDCHEFF:
        //console.log(action.payload.length);
            //console.log("reducer is working correctly");
            // console.log("afafd"+action.payload)
            return {
              ...state, cheff_Status: cheff_Status.cheff_Create.ADDCHEFF,
              cheffList:action.payload
            }
        // case cheff_Actions.cheff_Create.SHOWCHEFF:
        
        //     return {
        //       ...state, cheff_Status: cheff_Status.cheff_Create.SHOWCHEFF,
              
        //     }
        default:
        console.log("default is firing")
        return {...state,cheff_Status: cheff_Status.cheff_Create.SHOWCHEFF};
    }
}




//   export default function (state = data_initialState, action) {
//    console.log(action.type);
//     switch(action.type) {
//       case cheff_Actions.cheff_Create.ADDCHEFF:
//         //console.log("I am from Reduce AddCheff..");
//         alert(action.payload.length);
//         return { ...state, cheff_Status: cheff_Status.cheff_Create.ADDCHEFF,
//          cheffList: action.payload};
      
  
// default:
//         console.log("default is firing")
//         return {...state,cheff_Status: cheff_Status.cheff_Create.SHOWCHEFF};

//     }
//   };
