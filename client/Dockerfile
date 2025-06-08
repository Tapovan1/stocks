# Use official Node image
FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Expose Vite default dev server port
EXPOSE 5173

# Run Vite dev server with --host to allow network access
CMD ["npm", "run", "dev", "--", "--host"]
