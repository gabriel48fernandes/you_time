 //tipos de cortes
 let serviços =
 [    
     {corte: "corte basico & barba (sem degrade)", valor: 45.00},
     {corte: "corte basico, barba+sombrancelha", valor: 50.00},
     {corte: "corte na 0/1 & barba", valor: 50.00 },
     {corte: "corte degrade & barba + sombrancelha", valor: 55.00},
     {corte: "corte degrade na shaver & barba", valor: 50.00}
      
 ]
// Matriz de horários disponíveis
let horariosDisponiveis = [
   {dia: "terça", hr1: "09:00", hr2:"10:00",hr3: "11:00",hr4: "13:00", hr5:"14:00",hr6: "15:00",hr7:"16:00",hr8:"17:00"}, 
   {dia: "quarta", hr1:"14:00",hr2: "15:00",hr3: "16:00", hr4:"17:00",hr5: "18:00",hr6:"19:00",hr7:"20:00"},
   {dia: "quinta", hr1:"08:00", hr2: "09:00",hr3:"10:00", hr4:"11:00",hr5:"13:00",hr6:"14:00",hr7:"15:00",hr8:"14:00"},
   {dia: "sexta",hr1:"07:00",hr2:"08:00",hr3:"09:00",hr4:"10:00",hr5:"11:00",hr6:"12:00", hr7:"14:00",hr8:"15:00"},
   {dia: "sabado",hr1:"08:00",hr2:"09:00",hr3:"10:00",hr4:"11:00"}
  ];
console.table(serviços)
console.table (horariosDisponiveis)



