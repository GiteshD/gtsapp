FROM node:8.10.0-alpine

# Create a work directory and copy over our dependency manifest files.
RUN mkdir /app
WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

# Install all node packages
RUN npm install --production --silent && mv node_modules ../

# Copies everything over to Docker environment
COPY . .

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]
