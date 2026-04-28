# We use an Alpine-based image because it is smaller and more secure 
# (fewer "attack surfaces" for hackers)
FROM node:18-alpine

# Create the directory where the app will live
WORKDIR /app

# Copy the dependency list first (this helps with build caching)
COPY package*.json ./

# Install only necessary dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# The app runs on port 3000
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]