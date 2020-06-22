
import React , {createContext, useReducer} from 'react';  
import TransactionReducer from './transReducer';

const initransaction=[]
  
// creating hook of useContext
export const TransactionContext=createContext(initransaction);

export const TransactionProvider=({children})=>{
    let [state,dispatch]=useReducer(TransactionReducer,initransaction);
     
    function addTransaction(transObj){
      dispatch({
          type:"ADD_TRANSACTION",
          payload:{
              amount: transObj.amount,
              desc: transObj.desc,
              id:transObj.id
          },
      })
    }
    function deleteTransaction(transObj) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:{
                id:transObj.index
            }
        
        });
    }
    return(
        <TransactionContext.Provider value={{
            transactions:state,
            addTransaction:addTransaction,
            deleteTransaction
        }}>
         {children}
        </TransactionContext.Provider>
    )
}