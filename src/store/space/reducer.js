const initialState = {
  loading: true,
  spaces: [], // list of all spaces without the stories
  details: null, // The full space with stories for the details page
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "homepage/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "homepage/spacesFetched": {
      return {
        loading: false,
        spaces: [...action.payload],
      };
    }
    case "detailsPage/spacesFetched": {
      // console.log("action payload", action.payload);
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
