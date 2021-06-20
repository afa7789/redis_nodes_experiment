# Experimento NODES c/ Redis

Experimento de pub sub e escrita entre diferentes nodes com redis p/ avaliar viabilidade de estrategia de distribuição de dados.

# Installing project

needs : npm, and docker

# Running

git clone https://github.com/afa7789/redis_nodes_experiment.git
cd redis_nodes_experiment
docker run --name my-redis-container -p 7001:6379 -d redis
cd main_getter_writer_node
node index.js
