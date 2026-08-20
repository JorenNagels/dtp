/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  // Every route emits `<path>/index.html`, which is what lets the CloudFront
  // Function resolve directory-style URLs against a private S3 origin.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  // The design is typography-led and ships no raster images, so there is
  // nothing to optimise. If photography is added later, either set up
  // next-image-export-optimizer or keep plain <img> tags.
  images: { unoptimized: true },
};

export default nextConfig;
