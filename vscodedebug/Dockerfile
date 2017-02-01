#  $ docker build -t code .
#  $ docker run -d -p 3000:3000 -p 5858:5858 code tail -f /dev/null



#tail -f /dev/null

FROM node:4.2.3

EXPOSE 3000
EXPOSE 5858
COPY ./app /app
WORKDIR /app

RUN npm install
CMD ["node", "--debug=5858","index.js"]
