### sistema de gestão on-line 

### nome do sistema: youtime

### FUNCIONALIDADES DO SISTEMA.

### LOGIN DO CLIENTE ###
*  O cliente cria uma conta ou faz login utilizando suas credenciais
*  CPF
*  E-mail
*  login
*  numero de telefone

### VISUALIZAÇÃO DE HORARIOS DISPONIVEIS.
* Após o login, o cliente pode ver uma lista dos horários disponíveis para a semana atual
*  Essa lista deve ser atualizada em tempo real

### AGENDAMENTO DE HORÁRIO.
* Pagina com os horarios disponivis
* O cliente seleciona um horário disponível de sua preferencia
* confirma o agendamento

### NOTIFICAÇÃO DE AGENDAMENTO.
*Um sistema de notificação pode ser adicionado para lembrar os clientes sobre seus agendamentos

### MEUS AGENDAMENTOS.
* O cliente pode acessar uma seção chamada “Meus Agendamentos”
* Onde pode visualizar todos os seus horários agendados
* além de alterar ou cancelar um agendamento se necessário

### ADMINISTRAÇÃO.
* Um painel para administradores/prestador de serviço
* gerenciar os horários disponíveis
* visualizar os agendamentos
* ver o perfil do cliente e e fazer ajustes conforme necessário

         ### REGRA DE AGENDAMENTOS

### REGRA DE CANCELAMENTO.

* DESCRIÇÃO O cliente tem a opção de trocar o horario agendado ou até mesmo cancelar se preferir 

* JUSTIFICATIVA essa regra serve para que em um eventual cancelamento um novo cliente possa substituir ou o proximo ser antecipado

* CONDIÇÕES Só poderá ser cancelado com até 2 horas de antecêdencia.
* não pode já ter ocorrido outro cancelamento nos ultimos 30 dias. 

* AÇÕES se todas as condições forem atendidas o cliente podera cancelar e remarcar um novo horarios sem nenhuma multa
*  Se alguma condição não for atendida o cliente terá que pagar uma multa de 10% no proximo atendimento
  
### REGRA DE AGENDAMENTO.

* DESCRIÇÃO o cliente podera agendar um horario de preferencia se ainda disponivel

* JUSTIFICATIVA essa regra serve para evitar que o estabelecimento fique lotodo de clientes da espera

* CONDICÕES 

* AÇÕES 
### CASOS DE USO
# TITULO # gestão de horarios
* ATOR PRINCIPAL: prestador de serviço/empresario
* PRÉ CONDIÇÕES: o prestador de serviço deve saber dos seus compromisos da semana e não se "enrolar"
* PÓS CONDIÇÕES: no sistema vai mostrar apenas os horarios disponiveis pra semana 
* FLUXO PRINCIPAL: um local onde o prestador de serviso vai liberar os horarios disponiveis da semana e o cliente ira agendar.

# TITULO # cadastro de usuario
* ATOR PRINCIPAL: cliente
* PRÉ CONDIÇÕES: o cliente deve fazer fazer o cadastro com um documento e e-mail valido
* PÓS CONDIÇÕES: o cliente ira receber um e-mail com a confirmação 
* FLUXO PRINCIPAL: o cliente entra no aplicatico ou link
* faz login/cadastro
* agenda um horario disponivel e confirma
* após a confirmação o cliente ira receber um e-mail com a data e horario do agendamento.

# TITULO # pagamento
* ATOR PRINCIPAL: cliente
* PRÉ CONDIÇÕES: o cliente podera efetuar o pagamento via pix,  cartão de credito ou até mesmo na hora do atendimento 
* PÓS CONDIÇÕES: o pagamento via pix vai ser compensado no mesmo instante já o de cartão podera levar até 2 horas.
* FLUXO PRINCIPAL: o cliente escolhe a forma de pagamento que preferir
* efetua-o
* o sistema mandarar um e-mail de confirmação com a data e horario com o valor pago.

# TITULO # notificação 
* ATOR PRINCIPAL: cliente
* PRÉ CONDIÇÕES: o clinte já deve ter um usuario
* PÓS CONDIÇÕES: o cliente ira receber no seu e-mail o horario agendado
* FLUXO PRINCIPAL: o sistema manda um e-mail para o cliente com a comfirmação do agendamento
* o sistema enviara lembretes no dia escolhido para o cliente não esquecer.
  
