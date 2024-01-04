FROM node:iron-alpine3.17
 
ENV PORT=8000
 
WORKDIR /usr/app
 
COPY ./package.json ./
 
RUN yarn
 
COPY . .
 
RUN yarn tsc
 
 
EXPOSE 8000
 
CMD [ "yarn", "start" ]