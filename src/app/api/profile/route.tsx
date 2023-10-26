import formatHandle from "@/utils/formatHandle";
import getIPFSLink from "@/utils/getIPFSLink";
import getRawURL from "@/utils/getRawURL";
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

async function getProfile(handle: string) {
  try {
    const headersList = {
      "Content-Type": "application/json",
    };

    const gqlBody = {
      query: `query Profile($handle: Handle!) {
                profile(request: { handle: $handle }) {
                    handle
                    bio
                    picture {
                      ... on NftImage {
                        contractAddress
                        tokenId
                        uri
                        verified
                      }
                      ... on MediaSet {
                        original {
                          url
                          mimeType
                        }
                      }
                      __typename
                    }
                    coverPicture {
                        ... on NftImage {
                          contractAddress
                          tokenId
                          uri
                          verified
                        }
                        ... on MediaSet {
                          original {
                            url
                            mimeType
                          }
                        }
                        __typename
                    }
                }
              }
          `,
      variables: { handle: `${handle}.lens` },
    };

    const bodyContent = JSON.stringify(gqlBody);

    const response = await fetch("https://api.lens.dev/", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const data = await response.json();
    return data?.data?.profile;
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("handle");

    if (!hasTitle) {
      return new ImageResponse(
        (
          <img
            src={
              "https://images.unsplash.com/photo-1614854262409-bc319cba5802?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        )
      );
    }

    const handle = searchParams.get("handle")?.slice(1);
    const profile = await getProfile(handle!);

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            backgroundColor: "black",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <img
            src={getIPFSLink(getRawURL(profile?.coverPicture))}
            style={{
              height: "400px",
              width: "100%",
            }}
          />
          <div
            style={{
              display: "flex",
              paddingLeft: "32px",
              paddingRight: "32px",
            }}
          >
            <img
              src={getIPFSLink(getRawURL(profile?.picture))}
              alt=""
              style={{
                borderColor: "black",
                border: "6px",
                height: "200px",
                width: "200px",
                marginTop: "-50px",
                borderRadius: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "24px",
              }}
            >
              <h3
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: "36px",
                }}
              >
                {formatHandle(profile?.handle)}
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  color: "gray",
                  marginTop: "-16px",
                  lineClamp: 1,
                }}
              >
                {profile?.bio}
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
