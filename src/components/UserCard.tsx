"use client";

import formatHandle from "@/utils/formatHandle";
import getIPFSLink from "@/utils/getIPFSLink";
import getRawURL from "@/utils/getRawURL";
import { Profile } from "@lens-protocol/react-web";
import React from "react";

function UserCard({ profile }: { profile: Profile }) {
  return (
    <div className="max-w-sm border border-white border-opacity-10 rounded-lg text-gray-50">
      <div className="w-full">
        <img
          src={getIPFSLink(getRawURL(profile?.coverPicture))}
          className="aspect-auto rounded-t-lg"
        />
      </div>
      <div className="flex items-center p-4">
        <div className="relative flex flex-col items-center w-full">
          <div className="h-24 w-24 md rounded-full avatar items-end justify-end min-w-max absolute -top-16 flex text-purple-100 text-purple-650 ring-2 ring-black">
            <img
              className="h-24 w-24 md rounded-full relative"
              src={getIPFSLink(getRawURL(profile?.picture))}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-12">
            <span className="text-md text-gray-50 font-semibold text-center">
              {profile?.name}
            </span>
            <span className="text-sm text-gray-100 text-center">
              {formatHandle(profile?.handle)}
            </span>
            <p className="text-sm text-gray-400 mt-2 text-center">
              {profile?.bio}
            </p>
            <div className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
              <span className="text-center px-2">
                <span className="font-bold text-gray-50">
                  {profile?.stats?.totalFollowers}
                </span>
                <span className="text-gray-100"> followers</span>
              </span>
              <span className="text-center px-2">
                <span className="font-bold text-gray-50">
                  {profile?.stats?.totalFollowing}
                </span>
                <span className="text-gray-100"> following</span>
              </span>
              <span className="text-center px-2">
                <span className="font-bold text-gray-50">
                  {profile?.stats?.totalPosts}
                </span>
                <span className="text-gray-100"> posts</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(UserCard);
