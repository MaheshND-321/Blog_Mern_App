import React from "react";

const PostCard = ({ post }) => {
  return (
    <div className="group relative">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.img}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold ">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          className="z-10 group-hover:bottom-0 absolute"
          to={`/post/${post.slug}`}
        >
          Read article
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
