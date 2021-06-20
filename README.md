# Experimento NODES c/ Redis

![descrição visual da proposta simples](https://github.com/afa7789/redis_nodes_experiment/blob/main/resources/imagem_git.png?raw=true)

Experimento de setar um valor em um nodo principal e pegar enntre diferentes nodes com redis o valor p/ avaliar viabilidade de estrategia de distribuição de dados.

# Installing project

Précisa de ter instalado em sua máquina:
- docker
- npm
- node

Não foi testado em um MAC, mas é capaz que rode tbm.

# Running

`git clone https://github.com/afa7789/redis_nodes_experiment.git`

`cd redis_nodes_experiment`

`docker run --name my-redis-container -p 7001:6379 -d redis`

`cd main_getter_writer_node`

`node index.js`

Agora para setar os bots que não fazem nada de especifico:

va para raiz do git

`cd ..`

`./setbots.sh número_de_bots`

`./setbots.sh 10`

ele vai criar sites nos locahost de 3001 a 3011. 
http://localhost:3001

Sempre pulando o 3000.
