Docker containers of node and mongo where both are 
available from host via localhost

port range open is 3000-3010 on node container
port open is 27017 on mongo container

debug node available via "npm run start:debug"
verified it provides chrome tools address such as chrome-devtools://devtools/bundled/inspector.html?experiments=true&v8only=true&ws=0.0.0.0:3005/8e0c7e11-ad3e-4ecd-9adf-464b5ce7f6bd

node version is 7.x, node 8.x doesn't seem to work with docker/ws

feel free to change published ports or volume/host folders
