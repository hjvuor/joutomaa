import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { createClient } from "next-sanity";
import config from "@/sanity/config/client-config";
import Image from "next/image";

import { SanityImageSource } from "@sanity/asset-utils";

export const ImageComponent = ({
  value,
  isInline,
}: {
  value: SanityImageSource;
  isInline: boolean;
}) => {
  const { width, height } = getImageDimensions(value);
  console.log(value)
  return (
    <div
      style={{ width: "100%", height: "100%", position: "relative" }}
      className="min-h-96 pb-32 z-0"
    >
      <Image
        src={urlBuilder(createClient(config))
          .image(value)
          .width(isInline ? 100 : 800)
          .fit("max")
          .auto("format")
          .url()}
        alt={"alt"}
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};
