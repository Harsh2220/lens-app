"use client";

import useActivePublicationStore from "@/app/store/activePublication";
import formatHandle from "@/utils/formatHandle";
import getIPFSLink from "@/utils/getIPFSLink";
import getRawURL from "@/utils/getRawURL";
import { Post } from "@lens-protocol/react-web";
import { useRouter } from "next/navigation";
import React from "react";

function PublicationCard({ publication }: { publication: Post }) {
  const router = useRouter();
  const { setActivePublication } = useActivePublicationStore();

  return (
    <div
      className="sm:max-w-sm md:max-w-lg lg:max-w-2xl p-4 border rounded-lg border-white border-opacity-10 hover:bg-white hover:bg-opacity-5 cursor-pointer"
      onClick={() => {
        setActivePublication(publication);
        router.push(`/post/${publication?.id}`);
      }}
    >
      <div className="flex items-center gap-4">
        <img
          src={getIPFSLink(getRawURL(publication?.profile?.picture))}
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="">
          <h3 className="font-medium text-md">{publication?.profile?.name}</h3>
          <p className="text-xs">
            {formatHandle(publication?.profile?.handle)}
          </p>
        </div>
      </div>
      <h4 className="font-medium text-md my-4">
        {publication?.metadata.content || publication?.metadata.description}
      </h4>
      {publication?.metadata.image ? (
        <img
          src={getIPFSLink(publication?.metadata?.image)}
          alt=""
          className="rounded-lg aspect-auto"
        />
      ) : null}
    </div>
  );
}

export default React.memo(PublicationCard);
