# Use the official Node.js 14 image as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Express app will run (adjust this if your app uses a different port)
EXPOSE 3000

# Command to run your Node.js application
CMD [ "node", "index.js" ]