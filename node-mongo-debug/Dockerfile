# INTRO - docker container meant to be used as dev environment
# for development

FROM node:7.10.1

EXPOSE 3000-3010:3000-3010

#user is docker with password docker, has access to sudo
RUN useradd -m docker && \
    echo "docker:docker" | chpasswd && \
    adduser docker sudo 

WORKDIR /usr/src/

CMD tail -f /dev/null
