"use client";

import UserCard from "@/components/UserCard";
import UserPublications from "@/components/UserPublications";
import { useProfile } from "@lens-protocol/react-web";
import { useEffect } from "react";

export default function User({ params }: { params: { id: string } }) {
  useEffect(() => {
    const detectDeviceType = () =>
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
        ? "Mobile"
        : "Desktop";
    const deviceType = detectDeviceType();
    if (deviceType === "Mobile") {
      window.location.replace(`app.orb.flutter://${params.id}`);
    }
  }, [params.id]);

  const handle = params.id.slice(3);

  const {
    data: profile,
    loading,
    error,
  } = useProfile({ handle: `${handle}.lens` });

  if (loading) return <p className="p-14">Loading ...</p>;

  if (error) return;

  return (
    <div className="container mx-auto p-4 my-12">
      <div className="flex gap-16 flex-wrap">
        <div className="">
          <UserCard profile={profile} />
        </div>
        <UserPublications id={profile?.id} />
      </div>
    </div>
  );
}
