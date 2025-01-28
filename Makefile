IMAGE_NAME=portfolio
CONTAINER_NAME=$(IMAGE_NAME)-container

# Build Docker image
docker-build:
	docker build --tag $(IMAGE_NAME) .

# Run Docker container using the image created from `docker-build`
docker-run: 
	docker run --publish 4321:4321 --name $(CONTAINER_NAME) $(IMAGE_NAME)

# Stop the container
docker-stop:
	docker stop $(CONTAINER_NAME)

# Remove the container
docker-remove:
	docker rm $(CONTAINER_NAME)

# Stop and remove the container
docker-clean: docker-stop docker-remove