import React from "react";
import SearchComponents from "@/src/components/main/search_component"
function SearchServices({ messages, chosenLang, onExit, searchInptClicked }) {

  return (
    <SearchComponents {...{messages, chosenLang, onExit, searchInptClicked}} />
  
  );
}

export default SearchServices;

//
