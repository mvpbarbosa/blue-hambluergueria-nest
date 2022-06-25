  # Modulo de usuários (users)


  * Precisamos criar:
    * X users.module.ts
    * X users.controller.ts
    * X users.service.ts
  * users.module.ts:
    * X definir a classe do modulo
    * X exportar nossa classe
    * X colocar o decorator de modulo
    * X colocar as informações que o decorador deve receber (inicialmente vazias)
      * X Relacionar controller
      * X Relacionar provider (service)
  * users.controller.ts:
    * X definir a classe do controller
    * X exportar nossa classe
    * X colocar o decorator do controller X definir a rota do controller
    * X criar o construtor, relacionando o service que ainda não existe
      * X definir as nossas rotas (create e readAll)
      * X colocar a chamada das funções do service nas rotas
  * users.service.ts
    * X definir a classe do service
    * X exportar nossa classe
    * X colocar o decorator de service (Injectable)
      * X definir os métodos que estão sendo utilizados pelo controller
