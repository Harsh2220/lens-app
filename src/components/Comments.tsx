import { PublicationId, useComments } from "@lens-protocol/react-web";
import React from "react";
import CommentCard from "./CommentCard";

export default function Comments({ id }: { id: PublicationId }) {
  const {
    data: comments,
    loading,
    error,
  } = useComments({
    commentsOf: id,
  });

  if (loading) return <p className="p-14">Loading ...</p>;

  if (error) return;

  return (
    <div className="">
      <h1 className="text-xl font-semibold mt-12 mb-6">Comments</h1>
      <div className="flex-col space-y-4">
        {comments.map((comment) => (
          <CommentCard key={comment?.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
