import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-blue-400 bg-opacity-20">
      <div className="absolute -top-14 left-1/2 -translate-x-1/2">
        <Image
          unoptimized
          alt={author.name}
          width={100}
          height={100}
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
