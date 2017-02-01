# To build and run with Docker:
#
#  $ docker build -t ng-quickstart .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 -p 4200:4200 -v /Users/dfberry/repos/ng2-all:/home/nodejs/repos dfberry/ng2-all tail 

#tail -f /dev/null
#
FROM node:latest

RUN mkdir -p /quickstart /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /repos
RUN git clone https://github.com/ngrx/example-app.git
RUN git clone https://github.com/angular/quickstart.git

RUN chown -R nodejs:nodejs /repos
USER nodejs