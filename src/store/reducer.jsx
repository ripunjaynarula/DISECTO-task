import * as actionTypes from './actions';

const initialState = {
  collectionDetails: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COLLECTION: {
      // console.log('collection edited', action.collectionDetails, action);

      let updatedCollection = state.collectionDetails || [];
      updatedCollection.push(action.collectionDetails);
      return {
        ...state,
        collectionDetails: updatedCollection,
        // collectionDetails: action.collectionDetails,
      };
    }
    case actionTypes.DELETE_COLLECTION: {
      // console.log('collection edited', action.collectionDetails, action);

      let updatedCollection = state.collectionDetails || [];
      updatedCollection.splice(action.deleteIndex, 1);
      return {
        ...state,
        collectionDetails: updatedCollection,
        // collectionDetails: action.collectionDetails,
      };
    }
    case actionTypes.EDIT_DESC: {
      // console.log('collection edited', action.collectionDetails, action);

      let updatedCollection = state.collectionDetails || [];
      let initialValue = updatedCollection[action.editIndex];
      updatedCollection[action.editIndex] = {
        ...initialValue,
        desc: action.newValue,
      };
      // console.log(updatedCollection)
      return {
        ...state,
        collectionDetails: updatedCollection,
        // collectionDetails: action.collectionDetails,
      };
    }

    case actionTypes.DELETE_IMAGE: {
      // console.log('collection edited', action.collectionDetails, action);

      let updatedCollection = state.collectionDetails || [];
      updatedCollection[action.editIndex].fileList.splice(
        action.deleteIndex,
        1
      );
      // console.log(updatedCollection)
      return {
        ...state,
        collectionDetails: updatedCollection,
        // collectionDetails: action.collectionDetails,
      };
    }

    case actionTypes.EDIT_NAME: {
      // console.log('collection edited', action.collectionDetails, action);

      let updatedCollection = state.collectionDetails || [];
      let initialValue = updatedCollection[action.editIndex];
      updatedCollection[action.editIndex] = {
        ...initialValue,
        name: action.newValue,
      };
      // console.log(updatedCollection)
      return {
        ...state,
        collectionDetails: updatedCollection,
        // collectionDetails: action.collectionDetails,
      };
    }

    default:
      return state;
  }
};

export default reducer;
