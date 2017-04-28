# USED for Karma Chrome tests only

# make sure java is installed for protractor tests
# https://github.com/linemanjs/lineman-angular-template/issues/22

#  $ docker build -t karma-chrome .
#  $ docker start NUM
#  $ docker run -d -p 0.0.0.0:3000-3005:3000-3005 -p 5858:5858 -v /Users/dfberry/repos/urlmgr:/home/docker karma-chrome tail -f /dev/null
#  $ docker exec -it NUM /bin/bash

FROM markadams/chromium-xvfb-js:7

EXPOSE 3000-3005:3000-3005

RUN useradd -m docker && \
    echo "docker:docker" | chpasswd && \
    adduser docker sudo 
    
ENV CHROME_BIN=/usr/bin/chromium-browser 
    
RUN apt-get update && \
    apt-get install default-jre && \
    apt-get install git

WORKDIR /usr/src/app/
