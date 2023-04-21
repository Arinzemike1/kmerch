# Use the predefined node base image for this module.
FROM node:16.14.0

# create the log directory
RUN mkdir -p /var/log/applications/kongapay-international

# Creating base "src" directory where the source repo will reside in our container.
# Code is copied from the host machine to this "src" folder in the container as a last step.
RUN mkdir /src
WORKDIR /src

# Update the repository
RUN apt-get update

# Download and Install Nginx
RUN apt install -y nginx

# Copy from cache unless the package.json file has changed
COPY ./package.json /src

# # For development environment, we want to use pm2 to keep the code running
# RUN npm install -g pm2@3.5.0

RUN npm install -g react-scripts

# Install node dependencies
RUN npm install

RUN npm rebuild grpc --force

# Copy entire file to docker
COPY . /src

RUN mkdir /creds

# Map a volume for the log files and add a volume to override the code
# VOLUME ["/src", "/var/log/applications/kongapay-international"]

# Expose web service and nodejs debug port
EXPOSE 80

CMD ["/src/bin/start.sh"]
