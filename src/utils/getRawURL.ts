import { STATIC_ASSET } from "@/constants";
import { Maybe } from "@lens-protocol/api-bindings";
import { ProfileCoverMedia, ProfilePictureMedia } from "@lens-protocol/react-web";

function getRawURL(originalMediaObject: Maybe<ProfileCoverMedia | ProfilePictureMedia> | undefined) {
    if (typeof originalMediaObject === "undefined") {
        return STATIC_ASSET;
    }

    if (originalMediaObject?.__typename === "MediaSet") {
        return originalMediaObject?.optimized?.url || originalMediaObject?.original?.url;
    }
    if (originalMediaObject?.__typename === "NftImage") {
        return originalMediaObject?.uri;
    }
}

export default getRawURL;