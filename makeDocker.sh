# Definir o nome da imagem e do container baseado no nome do projeto no package.json (name)
imageName=$(cat package.json | grep "name" | cut -d':' -f 2 | cut -d'"' -f 2)
containerName=$imageName$'_container'
port=$(cat .env | grep "PORT" | cut -d'=' -f 2 | cut -d'"' -f 2)
# Remove o container
docker rm -f $"$containerName"
# Remove a imagem
docker rmi $"$imageName"
# Cria a imagem
docker build -t $"$imageName" .
# Cria o container
docker run -p $port:8099 --name $"$containerName" -d $"$imageName"
# Mostrar o nomes da imagem e do container criados e o número da porta associada
echo "Nome da imagem '$imageName'"
echo "Nome do container '$containerName'"
echo "Porta: $port"