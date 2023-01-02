import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  useEffect(() => {
    let sortedPosts;
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        // Sort the posts by date
        sortedPosts = result.sort((a, b) => {
          return moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf();
        });
        setRelatedPosts(sortedPosts);
      });
    } else {
      getRecentPosts(categories, slug).then((result) => {
        // Sort the posts by date
        sortedPosts = result.sort((a, b) => {
          return moment(b.createdAt).valueOf() - moment(a.createdAt).valueOf();
        });
        setRelatedPosts(sortedPosts);
      });
    }
  }, [slug]);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          {" "}
          <div className="w-16 flex-none">
            <img
              alt={post.title}
              height="100px"
              width="100px"
              className="align-middle rounded-full"
              src={post.featuredImage.url}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="text-md"
              key={post.title}
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
