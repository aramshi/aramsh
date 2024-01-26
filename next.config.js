/** @type {import('next').NextConfig} */
const pkg = require("./package.json");

// starts a command line process to get the git hash
const commitHash = require("child_process")
  .execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.scdn.co",
      },
    ],
  },
  env: {
    // add the package.json version and git hash to the environment
    NEXT_PUBLIC_APP_VERSION: pkg.version,
    NEXT_PUBLIC_COMMIT_HASH: commitHash,
  },
};
