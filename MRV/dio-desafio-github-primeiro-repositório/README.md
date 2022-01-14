# Desafio de Projeto do Git/Github da DIO

Repositório criado para o primeiro desafio de projeto

## Links úteis

[Sintaxe base markdown](https://www.markdownguide.org/basic-syntax/)

## Aula

Git
Gera uma chave encriptografada que é a mesma se o conteúdo de um arquivo for identico ao de outro
também conhecido com sha1
O git gera no início do arquivo o blob que fica escrito nele:
Blob
\0
Depois o conteúdo

Assim passando Blob 9\0 no início de um arquivo sem usar o sha1 ele gera a mesma chave

Blob contém metadados como tamanho, tipo do objeto, tamanho da string

Trees
As trees armazendo os blobs, então a tree aponta para o blob que por sua vez tem o sha1, pode apontar
também para outros diretórios/trees
E também guarda o nome do arquivo.
As trees tbm tem sha1, se mudamos um arquivo dentro da tree o sha1 dela tbm altera

Commit é o que junta tudo, está acima da arvore
Tem o autor, a mensagem explicando o que tem dentro
Também possuem sha1
Aponta para um parente, que é uma versão anterior dele, faz uma "linha do tempo"

Configurando chave SSH Git no Github
Abrir o git ssh-keygen -t ed25519 -c bernardo_costa_br@hotmail.com
ssh-keygen -t ed25519 -C bernardo_costa_br@hotmail.com
senha 47844123
Vai no github e passa a chave gerada
Depois volta no git: eval$(ssh-agent -s)
ssh-add id_ed25519
Digitar password

Ou então gerar o token de acesso
Ir em settings/developer settings/personal acess tokens

Para inicia o Git
vai até o diretório onde deseja começar
git init

Configurações iniciais para máquinas novas
git config --global user.email "email aqui"
git config --global user.name BeCosta

Md é a extenção markdown que é um editor de texto. Typora abre ele (markdownguide.org)

Depois de criar um arquivo no diretório

git add \*(para adicionar tudo\_
git commit -m "commit inicial(aqui é a msg que ira aparecer)"

Níveis no git
Unmodified > Modified > Staged
Staged é o arquivo modificado que está aguardando um commit para ter controle daquela
modificação

git status

git remote add origin "endenreço" (origin é o apelido para não ter q digitar o endereço toda vez)

git push origin master (para empurrar o diretorio local unmodified para o github)
password da pasta

git clone "endereço" (para clonar um repositório remoto para local)
