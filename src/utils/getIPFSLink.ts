import { STATIC_ASSET, ARWEAVE_GATEWAY, IPFS_GATEWAY } from "@/constants";

const getIPFSLink = (url: string | undefined): string => {
    if (!url) return STATIC_ASSET;

    const LINK = url?.includes(ARWEAVE_GATEWAY)
        ? url
        : url?.includes("ipfs://")
            ? `${IPFS_GATEWAY}${url?.split("//")[1]}`
            : url?.includes("ar://")
                ? `${ARWEAVE_GATEWAY}/${url?.split("ar://")[1]}`
                : url;
    return LINK;
};
export default getIPFSLink;