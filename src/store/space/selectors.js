export const selectHomepageLoading = (reduxState) =>
  reduxState.spaceReducer.loading;
export const selectHomepageSpaces = (reduxState) =>
  reduxState.spaceReducer.spaces;
export const selectDetailsPageSpaces = (reduxState) =>
  reduxState.spaceReducer.details;
export const selectShowStoryForm = (reduxState) =>
  reduxState.spaceReducer.showForm;
