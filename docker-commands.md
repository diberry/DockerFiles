* [15 Docker Commands You Should Know](https://towardsdatascience.com/15-docker-commands-you-should-know-970ea5203421)
* `docker container rm $(docker ps -a -q)` — Delete all containers that are not running.
* `docker image rm $(docker images -a -q)` — Delete all images
* `docker system prune` —Delete all unused containers, unused networks, and dangling images.

* `docker-compose up -d client` - bring up a single compose service