import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../store/space/actions";
import {
  selectHomepageLoading,
  selectHomepageSpaces,
} from "../store/space/selectors";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectHomepageLoading);
  const spaces = useSelector(selectHomepageSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  return (
    <div>
      Homepage
      {spaces.map((space) => {
        return (
          <div
            key={space.id}
            style={{
              padding: "1em",
              backgroundColor: `${space.backgroundColor}`,
              color: `${space.color}`,
            }}
          >
            <ul>
              <li
                style={{
                  margin: "10px",
                  listStyle: "none",
                }}
              >
                {space.title}
              </li>
              <br />
            </ul>

            <Link
              to={`/spaces/${space.id}`}
              style={{
                textAlign: "center",
                borderRadius: "2px",
                border: "solid, 1px",
                color: `${space.color}`,
                backgroundColor: "#CFCFAF",
                padding: "10px",
              }}
            >
              Visit space
            </Link>
          </div>
        );
      })}
    </div>
  );
}
