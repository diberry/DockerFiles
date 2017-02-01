#  $ docker build -t dfberry/ng2-all .
#  $ docker run -d -p 3000-3005:3000-3005 -p 4200:4200 -v /Users/dfberry/repos/url-mgr::/home/docker dfberry/url-mgr tail -f /dev/null
#  $ docker exec -it NUM /bin/bash
# need to install google chrome for karma/jasmine tests

#tail -f /dev/null

FROM node:latest 
 
RUN apt-get update && \
    apt-get install -y  sudo && \
    apt-get install -y nano && \
    apt-get install mongodb-10gen

RUN useradd -m docker && \
    echo "docker:docker" | chpasswd && \
    adduser docker sudo  && \
    mkdir -p home/docker/data/db && \
    usr/bin/mongod --smallfiles 

RUN npm install http-server -g && \
    npm install gulp -g && \
    npm install jshint -g && \
    npm install typescript -g && \
    npm install sails -g && \
    npm install -g angular-cli

WORKDIR /home/docker

EXPOSE 3000-3005:3000-3005
EXPOSE 27017






USER docker 


