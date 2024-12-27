# Nuxt 3 Dockerfile

FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run generate

# Production stage
FROM nginx:latest

# Copy generated files from the build stage
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Expose port 80
EXPOSE 80