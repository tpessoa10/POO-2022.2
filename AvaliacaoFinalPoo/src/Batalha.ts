import { Peca } from "./models/Peca";
import { Tanque } from "./models/Tanque";
import { Helicoptero } from "./models/Helicoptero";
import { Soldado } from "./models/Soldado";
import { Esquadrao } from "./models/Esquadrao";

const p1:Soldado = new Soldado('1','recruta')
const p2:Tanque = new Tanque('2','A')
const p3:Helicoptero = new Helicoptero('3','C')
const p4:Soldado = new Soldado('4','soldado')
const p5:Soldado  = new Soldado('5','soldado')
const p6:Tanque = new Tanque('6','A')
const p13:Tanque = new Tanque('7','A')
const p14:Tanque = new Tanque('8','A')
const p15:Tanque = new Tanque('9','A')


const p7:Soldado = new Soldado('1','recruta')
const p8:Tanque = new Tanque('2','A')
const p9:Helicoptero = new Helicoptero('3','C')
const p10:Helicoptero = new Helicoptero('4','A')
const p11:Soldado  = new Soldado('5','soldado')
const p12:Tanque = new Tanque('6','A')


const squad:Esquadrao = new Esquadrao('1','squad1',[])
const squad2:Esquadrao = new Esquadrao('1','squad2',[])
try{
squad.adicionarPeca(p1)
squad.adicionarPeca(p2)
squad.adicionarPeca(p3)
squad.adicionarPeca(p4)
squad.adicionarPeca(p5)
squad.adicionarPeca(p6)
squad.adicionarPeca(p13)
squad.adicionarPeca(p14)
squad.adicionarPeca(p15)
squad.ptsTotais()
squad2.adicionarPeca(p7)
squad2.adicionarPeca(p8)
squad2.adicionarPeca(p9)
squad2.adicionarPeca(p10)
squad2.adicionarPeca(p11)
squad2.adicionarPeca(p12)
squad2.ptsTotais()
//squad.busca('15')
console.log(squad.PtsAtaqueTot)
console.log(squad.PtsVidaTot)
console.log(squad2.PtsAtaqueTot)
console.log(squad2.PtsVidaTot)
squad.atacar(squad2)
console.log(squad2.PtsVidaTot)
}catch(e:any){
    console.log(e.message)
}