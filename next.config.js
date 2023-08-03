const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`

  module.exports = withBundleAnalyzer({
    reactStrictMode: false,
    output: 'export',
    eslint: {
      ignoreDuringBuilds: true,
    },
    assetPrefix: assetPrefix,
    basePath: basePath,
  });
} else {
  module.exports = withBundleAnalyzer({
    reactStrictMode: false,
    eslint: {
      ignoreDuringBuilds: true,
    }
  });
}


