# Use official Node.js base image
FROM node:18-alpine

# Set work directory
WORKDIR /usr/src/app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
