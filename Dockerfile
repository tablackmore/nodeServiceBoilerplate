FROM node:8.7.0

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy app from client to container
COPY . /usr/src/app/

# Install app dependencies
RUN npm i

# Which port do we want to expose? if any
EXPOSE 8081

# What command should be run to start the service
CMD ["npm", "start"]
