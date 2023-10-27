import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import SearchInputMd from "@/src/components/input/input_search_md";
import arrow_right from "@/icons/arrow_right.svg";
import close from "@/icons/header/close.svg";
import SearchComponents from "@/src/components/main/search_component"
function SearchServices({ messages, chosenLang, onExit, searchInptClicked }) {

  return (
    <SearchComponents {...{messages, chosenLang, onExit, searchInptClicked}} />
  
  );
}

export default SearchServices;

//
