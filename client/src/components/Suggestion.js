import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Suggestion = ({
  data,
  value,
  handleSelect,
  setSelectedSuggestionIndex,
  selectedSuggestionIndex,
}) => {
  if (value.length <= 1) {
    return "";
  }
  let searchResults = data.filter((item, i) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });
  let searchResults10entries = searchResults.slice(0, 10);

  return (
    <Suggestions>
      {searchResults10entries.map((result, i) => {
        return (
          <SearchResult
            key={i}
            onMouseEnter={() => {
              setSelectedSuggestionIndex(i);
              console.log(i);
            }}
            onClick={() => handleSelect(result._id)}
            style={{
              background:
                i === selectedSuggestionIndex
                  ? "hsla(50deg, 100%, 80%, 0.25)"
                  : "transparent",
            }}
          >
            <NavigationLink exact to={`/item/${result._id}`}>
              <SuggestionColumnOne>
                <Regular>{result.name}</Regular>
                <Regular>{result.price}</Regular>
              </SuggestionColumnOne>
              <SuggestionColumnTwo>
                <Regular>{result.body_location}</Regular>
                <Regular>{result.category}</Regular>{" "}
              </SuggestionColumnTwo>
            </NavigationLink>
          </SearchResult>
        );
      })}
    </Suggestions>
  );
};

const Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  width: 95%;
  box-shadow: 1px -1px 13px -1px #000000;
  background-color: white;
  z-index: 100;
`;

const SearchResult = styled.div`
  padding: 5px;
  font-size: 16px;
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  list-style: none;
  justify-content: space-between;
`;

const SuggestionColumnOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`;
const SuggestionColumnTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 10%;
`;

const Regular = styled.span`
  font-weight: normal;
`;

const NavigationLink = styled(NavLink)`
  text-decoration: none;
  margin: 0px 0 0 25px;
  padding: 7px 10px;
  display: flex;
  align-items: center;
  color: black;
  font-size: 15px;
  font-weight: normal;

  &:hover {
    color: gray;
  }
`;

export default Suggestion;
