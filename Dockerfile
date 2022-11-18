RUN 'Début dockerfile build'
WORKDIR "/front"
RUN npm install
RUN npm start
docker build -t test