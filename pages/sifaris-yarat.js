import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Sifaris from "@/src/components/sifaris";

function Sifaris_yarat() {
  return (
    <div className="">
      <Sifaris />
    </div>
  );
}

export default Sifaris_yarat;