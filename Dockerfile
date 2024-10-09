FROM node:20-bookworm-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install
RUN pnpm build

FROM base
COPY --from=build /usr/src/app/package.json /usr/src/app/
COPY --from=build /usr/src/app/server.js /usr/src/app/
COPY --from=build /usr/src/app/build /usr/src/app/
WORKDIR /usr/src/app/
EXPOSE 3000
CMD [ "pnpm", "start" ]