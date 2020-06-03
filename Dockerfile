FROM gcr.io/google_appengine/nodejs
WORKDIR /
ADD . .
RUN npm i && npm run build
CMD ["npm", "run", "ssr"]