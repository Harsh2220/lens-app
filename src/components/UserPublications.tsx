"use client";

import React from "react";
import PublicationCard from "./PublicationCard";
import {
  ProfileId,
  PublicationTypes,
  usePublications,
} from "@lens-protocol/react-web";

export default function UserPublications({ id }: { id: ProfileId }) {
  const {
    data: publications,
    loading,
    error,
  } = usePublications({
    profileId: id,
    publicationTypes: [PublicationTypes.Post],
  });

  if (loading) return <p className="p-14">Loading ...</p>;

  if (error) return;

  return (
    <div className="flex-col space-y-4">
      {publications.map((publication) => {
        if (publication?.__typename === "Post") {
          return (
            <PublicationCard key={publication.id} publication={publication} />
          );
        }
      })}
    </div>
  );
}
