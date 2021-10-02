import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { spaceById } from "../store/space/actions";
import { selectDetailsPageSpaces } from "../store/space/selectors";
import { useParams } from "react-router";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const space = useSelector(selectDetailsPageSpaces);
  const { id } = useParams();
  console.log("my id", id);

  useEffect(() => {
    dispatch(spaceById(id));
  }, [dispatch, id]);
  console.log("my image", space);

  return (
    <div>
      {!space ? (
        "Loading"
      ) : (
        <div
          style={{
            backgroundColor: `${space.backgroundColor}`,
            color: `${space.color}`,
          }}
        >
          <h1>{space.title}</h1>
          <p>
            <strong>{space.description}</strong>
          </p>
          {space.stories
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((story) => {
              return (
                <div style={{ padding: "1em", margin: "1em" }}>
                  <h3>{story.name}</h3>
                  <p>{story.content}</p>
                  <img
                    src={story.imageUrl}
                    alt="space"
                    style={{ maxWidth: "400px" }}
                  />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
