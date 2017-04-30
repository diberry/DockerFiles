# INTRO - docker container meant to be used as dev environment
# for client-side development, specifically tested with angular 
# webpack, karma, jasmine, and protractor

# NOTES -   NPM used for install sometimes
#           YARN is far more dependable so use after installation

# SUDO USER: docker
# PWD: docker

# DO NOT - this is not meant to be a run and return answer container

# DO - run in console with shared directory
# between host and container as IDE

# VARIABLES TO REPLACE
# HOST_SRC_PATH: your host computer's path to any src you want to share with container
# CONTAINER_SRC_PATH: /usr/src/app/

# DOCKER USAGE - BUILD IMAGE
#       image named client-e2e
#  $ docker build -t client-e2e .

# DOCKER USAGE - CREATE DETACHED CONTAINER
#       container named client-e2e-run
#       with shared ports of 3000-3005
#       with shared directory
#       with tail running - so container doesn't exit
#  $ docker run -d -p 0.0.0.0:3000-3005:3000-3005 -v HOST_SRC_PATH:CONTAINER_SRC_PATH --name client-e2e-run client-e2e tail -f /dev/null

# dfb only
# docker run -d -p 0.0.0.0:3000-3005:3000-3005 -v /Users/dfberry/repos/urlmgr/:/usr/src/app/urlmgr/ --name client-e2e-run client-e2e tail -f /dev/null

# DOCKER USAGE - verify docker container started 
#  $ docker ps -a

# DOCKER USAGE - OPEN NAMED CONTAINER IN TERMINAL FOR DEVELOPMENT AND TEST
#       with bash running
#  $ docker exec -it client-e2e-run /bin/bash

# BUILD PROJECT INTO DIST folder
#  $ npm run build:prod

# RUN WEBSITE at localhost:3000
#  $ npm run server:prod:ci

# UNIT TESTS - tests for angular-webpack-starter
#  $ npm run test

# e2e TESTS - tests for angular-webpack-starter
#  $ npm run e2e


FROM markadams/chromium-xvfb-js:7

# open ports to host
EXPOSE 3000-3005:3000-3005

#user is docker with password docker, has access to sudo
RUN useradd -m docker && \
    echo "docker:docker" | chpasswd && \
    adduser docker sudo 
    
# set environment variable so protractor can find chrome
ENV CHROME_BIN=/usr/bin/chromium-browser 

# Update is used to resynchronize the package index files from their sources. An update should always be performed before an upgrade.
RUN apt-get update -qqy \
  && apt-get -qqy install \
    apt-utils \
    wget \
    sudo \
    curl \
    default-jre \
    git 

# Font libraries
    #ttf-ubuntu-font-family \
RUN apt-get update -qqy \
  && apt-get -qqy install \
    fonts-ipafont-gothic \
    xfonts-100dpi \
    xfonts-75dpi \
    xfonts-cyrillic \
    xfonts-scalable \
    libfreetype6 \
    libfontconfig

# Clean clears out the local repository of retrieved package files. Run apt-get clean from time to time to free up disk space.
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app/

RUN npm install --unsafe-perm -g @angular/cli && \
  npm install --unsafe-perm -g protractor && \
  npm install -g yarn 
# Get the latest Google Chrome driver
  #npm update 
  #webdriver-manager update

# install yarn & angular project - webpack ng2 starter (has e2e test inside)
RUN git clone https://github.com/AngularClass/angular2-webpack-starter && \
    cd angular2-webpack-starter && \
    yarn install 

    #jasmine \
    #jasmine-reporters \
    #jasmine-spec-reporter \
    #protractor-jasmine2-html-reporter \
    #jasmine-allure-reporter \
    #protractor-console 
    
# update webdriver-manager
RUN webdriver-manager update

WORKDIR /usr/src/app/angular2-webpack-starter
