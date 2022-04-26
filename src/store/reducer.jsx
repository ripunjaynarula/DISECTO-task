import * as actionTypes from './actions';

const initialState = {
  collectionDetails: [],
  
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLLECTION: {
      {
        console.log('collection edited', action.collectionDetails, action);
      }
      let updatedCollection = state.collectionDetails || [];
      updatedCollection.push(action.collectionDetails);
      return {
        ...state,
        collectionDetails:updatedCollection,
        // collectionDetails: action.collectionDetails,
      };
    }
    case actionTypes.DELETE_COLLECTION: {
        {
          console.log('collection edited', action.collectionDetails, action);
        }
        let updatedCollection = state.collectionDetails || [];
        updatedCollection.splice(action.deleteIndex,1);
        return {
          ...state,
          collectionDetails:updatedCollection,
          // collectionDetails: action.collectionDetails,
        };
      }

    default:
      return state;
  }
};

export default reducer;
