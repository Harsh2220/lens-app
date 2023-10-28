"use client";

import useActivePublicationStore from "@/app/store/activePublication";
import Comments from "@/components/Comments";
import PublicationCard from "@/components/PublicationCard";
import detectDeviceType from "@/utils/getDeviceType";
import { PublicationId, usePublication } from "@lens-protocol/react-web";
import { useEffect } from "react";

export default function Post({ params }: { params: { id: string } }) {
  const { activePublication } = useActivePublicationStore();

  const {
    data: publication,
    loading,
    error,
  } = usePublication({
    publicationId: params.id as PublicationId,
  });

  useEffect(() => {
    const deviceType = detectDeviceType();
    if (deviceType === "Mobile") {
      window.location.replace(`https://orb.ac/post/${params.id}`);
    }
  }, [params.id]);

  if (loading) return <p className="p-14">Loading ...</p>;

  if (error) return;

  return (
    <div className="container p-4 flex-col mx-auto my-12 flex items-center">
      <PublicationCard publication={activePublication! || publication} />
      <Comments id={params.id as PublicationId} />
    </div>
  );
}
