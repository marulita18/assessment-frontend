import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMySpace } from "../store/user/selectors";
import { removeStoryById } from "../store/user/actions";
import NewStoryForm from "./NewStoryForm";
import EditMySpace from "./EditMySpace";

export default function MySpace() {
  const userSpace = useSelector(selectMySpace);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const [editMySpace, setEditMySpace] = useState(false);

  return (
    <div>
      {!userSpace ? (
        "Loading"
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>{userSpace.title}</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              margin: "40px",
            }}
          >
            <button
              onClick={() => {
                setShowForm(!showForm);
              }}
              style={{
                backgroundColor: "blueviolet",
                padding: "10px",
                border: "1px, solid, white",
                color: "white",
                fontWeight: "bold",
                boxShadow: "2px 2px 2px gray",
              }}
            >
              Post a cool story, bro!
            </button>
            <button
              onClick={() => {
                setEditMySpace(!editMySpace);
              }}
              style={{
                backgroundColor: "white",
                color: "blueviolet",
                padding: "10px",
                border: "1px, solid, white",
                fontWeight: "light",
                boxShadow: "2px 2px 2px gray",
              }}
            >
              Edit my space
            </button>
          </div>
          {showForm ? <NewStoryForm /> : null}
          {editMySpace ? <EditMySpace /> : null}
          {userSpace.stories.map((story) => {
            return (
              <div key={story.id} style={{ padding: "1em", margin: "1em" }}>
                <h2>{story.name}</h2>
                <p>{story.content}</p>
                <button
                  onClick={() => {
                    // console.log("whats my id", story.id);
                    dispatch(removeStoryById(story.id));
                  }}
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  Remove story
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
