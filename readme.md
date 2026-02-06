# V0 Next.js starter for Uniform

This starter contains the essentials with pre-enabled Uniform capabilities. It has a single-page type and a single component (Hero). It is enabled for visual experience management, personalization, and A/B testing.

Recommended as a good starting point for greenfield projects or learning.

[Pre-deployed demo](https://uniform-hello-world.vercel.app/).

## Getting started

1. `pnpm install`
1. `pnpm dev` and open [http://localhost:3000](http://localhost:3000).

## Deploying to your own project

1. Set up your own project ID and API key values in `.env` with the API key that has the `Developer` role.
2. `pnpm uniform:push` to push content.

## Rendering modes
Both SSR (default) and SSG are supported, see `/pages/[[...slug]].tsx.ssg` and `/pages/[[...slug]].tsx.ssr` and enable the right mode for your use case.
