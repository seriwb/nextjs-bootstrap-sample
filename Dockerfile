FROM node:14-slim

EXPOSE 3000

RUN apt-get update \
  && apt-get install -y git build-essential \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /nextjs-boostrap-sample

COPY . .

RUN yarn && yarn build

CMD ["yarn", "start"]