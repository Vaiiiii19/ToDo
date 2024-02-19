import React, { useRef } from "react";
import Cards from "./Cards";
import { data } from "autoprefixer";

function Foreground() {
    const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
      filesize: ".9mb",
      close: false,
      tags: {isOpen : true , tagTitle: "Upload" , tagColor: "blue"}
    },
    {
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        filesize: ".9mb",
        close: false,
        tags: {isOpen : false , tagTitle: "Download Now" , tagColor: "green"}
      },
      {
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        filesize: ".9mb",
        close: false,
        tags: {isOpen : true , tagTitle: "Download Now" , tagColor: "green"}
      }
  ];
  return (
    <div ref = {ref} className="fixed top-0 left-0 z[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((items , index) => (
        <Cards data = {items} reference={ref}/>
      ))}
    </div>
  );
}

export default Foreground;
