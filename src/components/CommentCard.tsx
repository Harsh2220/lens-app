import formatHandle from "@/utils/formatHandle";
import getIPFSLink from "@/utils/getIPFSLink";
import getRawURL from "@/utils/getRawURL";
import { Comment } from "@lens-protocol/react-web";
import React from "react";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="sm:max-w-sm md:max-w-lg lg:max-w-2xl p-4 border rounded-lg border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 cursor-pointer">
      <div className="flex items-center gap-4">
        <img
          src={getIPFSLink(getRawURL(comment?.profile?.picture))}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="">
          <h3 className="font-medium text-md">{comment?.profile?.name}</h3>
          <p className="text-xs">{formatHandle(comment?.profile?.handle)}</p>
        </div>
      </div>
      <h4 className="font-medium text-md my-4">
        {comment?.metadata.content || comment?.metadata.description}
      </h4>
      {comment?.metadata.image ? (
        <img
          src={getIPFSLink(comment?.metadata?.image)}
          alt=""
          className="rounded-lg aspect-auto"
        />
      ) : null}
    </div>
  );
}
