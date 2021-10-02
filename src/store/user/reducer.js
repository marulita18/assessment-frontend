import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case "mySpace/storyRemoved":
      console.log("my payload", action.payload);
      const newStories = state.space.stories.filter((story) => {
        return story.id !== action.payload;
      });
      console.log("my new stories", newStories);

      return {
        ...state,
        space: { ...state.spaces, stories: newStories },
      };

    case "STORY_POST_SUCCESS":
      //always console log my state to see whats coming
      const newState = {
        ...state,
        space: {
          ...state.space,
          stories: [...state.space.stories, action.payload],
        },
      };
      return newState;

    case "SPACE_UPDATED":
      console.log("am i hee>?");
      const spaceUpdatedState = {
        ...state,
        space: { ...action.payload, stories: state.space.stories },
      };
      console.log("space uodated", spaceUpdatedState);
      return spaceUpdatedState;

    default:
      return state;
  }
};
