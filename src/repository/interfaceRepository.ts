export interface interfaceRepository <T>{

    atualizarPorID(item:T):Promise<void>
}