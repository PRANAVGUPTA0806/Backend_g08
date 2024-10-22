# 1. Use the official Node.js image to build the frontend
FROM node:18-alpine


# 2. Set the working directory
WORKDIR /app

# 3. Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy the rest of the frontend code
COPY . .

# 5. Build the React app for production
RUN npm run build

# # 6. Use Nginx to serve the built React app
# FROM nginx:alpine
# COPY --from=0 /app/build /usr/share/nginx/html

# 7. Expose the port (Nginx runs on port 80 by default)
EXPOSE 3000

# 8. Start the Nginx server
CMD ["npm", "start"]
# CMD ["nginx", "-g", "daemon off;"]
