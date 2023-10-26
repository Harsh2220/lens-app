import getIPFSLink from "@/utils/getIPFSLink";
import getRawURL from "@/utils/getRawURL";
import { ImageResponse, NextRequest } from "next/server";

export const runtime = "edge";

async function getProfile(id: string) {
  try {
    const headersList = {
      "Content-Type": "application/json",
    };

    const gqlBody = {
      query: `query Publication($pubId: InternalPublicationId) {
        publication(request: { publicationId: $pubId }) {
          __typename
          ... on Post {
            metadata {
              media {
                __typename
                onChain {
                  url
                }
                original {
                  url
                }
                optimized {
                  url
                }
              }
            }
          }
        }
      }`,
      variables: { pubId: id },
    };

    const bodyContent = JSON.stringify(gqlBody);

    const response = await fetch("https://api.lens.dev/", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const data = await response.json();
    console.log(data);
    return data?.data?.publication;
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const hasId = searchParams.has("id");

    if (!hasId) {
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

    const id = searchParams.get("id");
    const publication = await getProfile(id!);

    return new ImageResponse(
      (
        <img
          src={getIPFSLink(getRawURL(publication?.metadata?.media[0]))}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
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
