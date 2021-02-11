# Docker reference

```
attach      Attach local standard input, output, and error streams to a running container
build       Build an image from a Dockerfile

commit      Create a new image from a container's changes
create      Create a new container
cp          Copy files/folders between a container and the local filesystem
diff        Inspect changes to files or directories on a container's filesystem
export      Export a container's filesystem as a tar archive
import      Import the contents from a tarball to create a filesystem image
history     Show the history of an image
save        Save one or more images to a tar archive (streamed to STDOUT by default)
update      Update configuration of one or more containers
tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
load        Load an image from a tar archive or STDIN

images      List images
rmi         Remove one or more images

exec        Run a command in a running container
rm          Remove one or more containers
ps          List containers
run         Run a command in a new container
rename      Rename a container

login       Log in to a Docker registry
logout      Log out from a Docker registry
pull        Pull an image or a repository from a registry
push        Push an image or a repository to a registry
search      Search the Docker Hub for images

events      Get real time events from the server
top         Display the running processes of a container
port        List port mappings or a specific mapping for the container
stats       Display a live stream of container(s) resource usage statistics
logs        Fetch the logs of a container

kill        Kill one or more running containers
pause       Pause all processes within one or more containers
restart     Restart one or more containers
unpause     Unpause all processes within one or more containers
wait        Block until one or more containers stop, then print their exit codes
stop        Stop one or more running containers
start       Start one or more stopped containers

```

## `run`: create a new container

```
docker run -d -p X:Y <image>
```

 * `-d` for detach
 * `-p` to map port X of the host to port Y of the container


### Interactive shell

New container:
```
docker run -it --entrypoint /bin/sh  <image>
```

Existing container:
```
docker exec <container> /bin/sh
```

* `-i` keep stdin open
* `-t` allocate pseudo-terminal


## `build`

```
docker build -t <tag> <dir or url>
```


### Listing containers

Running: `docker ps`

All: `docker ps -a`


### Stopped containers

If a container command completes, or a container is killed.
The container reaches 'stopped' state.

Stopped containers are preserved.
They can be restarted. Or the state can be committed to a new image.

`docker ps -a` shows all containers, including stopped ones


### Removing containers

```
docker rm <id or name>
```

Remove all stopped containers

```
docker ps -aq -f status=exited | xargs docker rm
```

 * `-a`: show all
 * `-q`: only list container id
 * `-f`: filter


## `Dockerfile`

Example directory layout:
```
Dockerfile
.dockerignore
data/
  cats.csv
  dogs.csv
scripts/
  install.sh
  run.sh
```

Example `Dockerfile`:
```
FROM alpine:latest
WORKDIR /app
COPY . .
RUN chmod +x scripts/*.sh
RUN scripts/install.sh
ENTRYPOINT ["/bin/sh", "scripts/run.sh"]
CMD ["default"]
```

 * `FROM` - Base image, required
 * `WORKDIR` - change working directory in container (creates non-existing directories)
 * `COPY` - from host to container
 * `RUN` - execute command in a new container layer and commit results
 * `ENTRYPOINT` - command to execute when running
 * `CMD` - default arguments to entrypoint

[Dockerfile reference](https://docs.docker.com/engine/reference/builder/)


## Volumes & Mounts

### Named volume

Volume is a special file on the host that is mounted in containers.

```
# Create
docker volume create <volume_name>

# Start with mount
docker run -v <volume_name>:<mount_point> <image>

# Show details
docker volume inspect <volume_name>
```

### Bind Mount

Mount a host directory inside the container.

```
docker run -v <host_dir>:<mount_point> <image>
```


Volume commands:
```
create      Create a volume
inspect     Display detailed information on one or more volumes
ls          List volumes
prune       Remove all unused local volumes
rm          Remove one or more volumes
```


## Network

Put containers on the same network to let them talk to each-other.

```

# Create network
docker network create <network_name>

# Start with network and network hostname
docker run --network <network_name> --network-alias <container_hostname> <image>
```

Example:

```
# Listen on host1
docker run --network testnet --network-alias host1 <image>
docker exec -it <host1 container name> nc -v -l -p 3000

# Connect from host2
docker run --network testnet --network-alias host2 <image>
docker exec -it <host2 container name> nc host1.testnet 3000
```

### Network  Commands

```
connect     Connect a container to a network
create      Create a network
disconnect  Disconnect a container from a network
inspect     Display detailed information on one or more networks
ls          List networks
prune       Remove all unused networks
rm          Remove one or more networks
```

## Docker compose

Compose containers via `docker-compose.yml` specification.

Network is automatically created.

```
version: "3.7"

services:
  listener:
    image: alpine:latest
    command: nc -v -l -p 3000
  ping:
    image: alpine:latest
    command: echo hello | nc listener 3000
```

Commands

```
down               Stop and remove containers, networks, images, and volumes
up                 Create and start containers

config             Validate and view the Compose file
create             Create services
build              Build or rebuild services

events             Receive real time events from containers
logs               View output from containers

exec               Execute a command in a running container
kill               Kill containers
rm                 Remove stopped containers

images             List images
pull               Pull service images
push               Push service images

ps                 List containers
port               Print the public port for a port binding
top                Display the running processes

run                Run a one-off command
scale              Set number of containers for a service

start              Start services
stop               Stop services
restart            Restart services
unpause            Unpause services
pause              Pause services
```

[Compose file reference](https://docs.docker.com/compose/compose-file/)


## Debug

### Image history

Trace the steps that built the image

```
docker image history <image>
```
