const Action={
    DELETE_TRANSACTION:'DELETE_TRANSACTION',
    ADD_TRANSACTION:'ADD_TRANSACTION'
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch(action.type) {
        case Action.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case Action.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }

}