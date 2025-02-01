# GeradorDeSenha
Este projeto implementa um gerador de senhas e um validador de CPF utilizando duas classes principais. O projeto está configurado com Webpack, Babel e CSS Loader para garantir a transpilação do código JavaScript e a inclusão de arquivos CSS no bundle final.

# Classe do ValidarCPF
A classe ValidarCPF é responsável por realizar a validação de um CPF. Ela contém quatro métodos, sendo um deles estático, permitindo sua utilização sem a necessidade de instanciar a classe.

1.1 Método isSequencia()
Este método verifica se o CPF fornecido é uma sequência numérica (como 111.111.111-11). A lógica é:

O primeiro caractere do CPF é repetido até o final do CPF.
Se o valor gerado pela repetição for igual ao CPF original, o método retorna true; caso contrário, retorna false.

1.2 Método criaNovoCPF()
Este método gera um CPF parcial para fins de comparação. O processo é o seguinte:

O CPF enviado (sem os dois últimos dígitos verificadores) é extraído utilizando o método slice.
Em seguida, o primeiro dígito verificador é gerado com o método estático criaDigito().
O segundo dígito verificador é calculado da mesma forma, mas o primeiro dígito é passado como argumento para garantir o cálculo correto.
Após a criação dos dois dígitos verificadores, eles são adicionados ao CPF parcial.

1.3 Método criaDigito(cpfSemDigitos)
Este método é responsável por calcular os dois dígitos verificadores de um CPF. O procedimento é o seguinte:

Inicializam-se duas variáveis: total (inicializada com 0) e regressivo (que começa com o valor de cpfSemDigitos.length + 1, ou seja, 10 para um CPF de 9 dígitos).
Um loop percorre cada dígito de cpfSemDigitos e multiplica o valor do dígito pelo peso regressivo, acumulando o resultado em total.
O peso é decrementado a cada iteração.
Após o loop, o dígito verificador é calculado pela fórmula: digito = 11 - (total % 11). Caso o valor do dígito seja maior que 9, o método retorna 0; caso contrário, retorna o valor do dígito como string.

1.4 Método valida()
Este método valida se o CPF enviado é válido, realizando as seguintes verificações:

Se o CPF foi fornecido.
Se o tipo do CPF é uma string.
Se o CPF tem exatamente 11 caracteres.
Se o CPF não é uma sequência numérica (utilizando o método isSequencia()).
Caso todas as condições sejam atendidas, o método chama criaNovoCPF() para gerar um CPF válido e compara com o CPF enviado. O método retorna true se os CPFs forem iguais, e false caso contrário.

# Classe GerarCPF
A classe GerarCPF é responsável por gerar um CPF aleatório e válido, utilizando os métodos da classe ValidarCPF para garantir que o CPF gerado seja válido. A seguir, são descritos os métodos dessa classe.


1. Método random()
Este método é responsável por gerar um conjunto de 9 caracteres numéricos aleatórios, que representam os primeiros nove dígitos de um CPF. Esses dígitos são necessários para a criação de um CPF válido, e o método retorna essa sequência numérica gerada aleatoriamente.

2. Método formatado()
Este método é utilizado apenas para formatar o CPF gerado, adicionando a pontuação padrão do CPF:

Adiciona os pontos entre os três primeiros blocos de números (exemplo: 123.456.789).
Adiciona o hífen entre o segundo e o terceiro bloco de números (exemplo: 123.456.789-00).

3. Método geraNovoCPF()
Este método é responsável por gerar o CPF completo e válido. O procedimento é o seguinte:

Primeiramente, o método gera um conjunto aleatório de 9 dígitos utilizando o método random().
Em seguida, ele utiliza o método estático criaNovoCPF() da classe ValidarCPF para calcular os dois dígitos verificadores e gerar um CPF válido.
Após gerar o CPF válido, o método chama formatado() para aplicar a formatação padrão (pontos e hífen) ao CPF.
Por fim, o método retorna o CPF gerado e formatado.

# Integração e geração do CPF na tela (main.js)

Função geradorDeCPF():

Seleciona o elemento HTML com a classe .cpf-gerado (onde o CPF gerado será exibido).
Cria uma nova instância da classe GeraCPF.
Chama o método geraNovoCPF() da instância de GeraCPF para gerar um CPF válido e o insere no conteúdo HTML do elemento .cpf-gerado.
Adicionando o Evento click:

Um eventListener é adicionado ao documento para escutar qualquer clique na página.
Quando o clique acontece, o código verifica se o elemento clicado possui a classe gerar-cpf. Caso tenha, a função geradorDeCPF() é chamada para gerar e exibir o novo CPF.