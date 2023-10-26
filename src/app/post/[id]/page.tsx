"use client";

import useActivePublicationStore from "@/app/store/activePublication";
import Comments from "@/components/Comments";
import PublicationCard from "@/components/PublicationCard";
import { PublicationId } from "@lens-protocol/react-web";
import React, { useEffect } from "react";

export default function Post({ params }: { params: { id: string } }) {
  const { activePublication } = useActivePublicationStore();

  useEffect(() => {
    const detectDeviceType = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Mobile"
        : "Desktop";
    const deviceType = detectDeviceType();
    if (deviceType === "Mobile") {
      window.location.replace(`https://orb.ac/post/${params.id}`);
    }
  }, [params.id]);

  return (
    <div className="container p-4 flex-col mx-auto my-12 flex items-center">
      <PublicationCard publication={activePublication!} />
      <Comments id={params.id as PublicationId} />
    </div>
  );
}
