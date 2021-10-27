#!/bin/bash

REGISTRY="harbor.clariah.nl"
OWNER="demo"
IMAGE="background-colour-app"

version=$(git rev-parse master)
tag=$(git describe --tags)
repo="${REGISTRY}/${OWNER}/${IMAGE}"

docker_tag=${tag:1}
docker build --tag="${repo}:${docker_tag}" .
echo "RELEASE=${version} ${tag}"
docker login  -u "$USER" "$REGISTRY" && docker push "${repo}:${docker_tag}"
