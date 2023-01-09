// verifica se uma data inserida no formato lista [dia: int,mes: int,ano: int] é maior do que a data atual
// retorna true a data inserida seja maior do que o dia de hoje
// lembrete ----->>>  os meses vão de 0(janeiro) até 11(dezembro) <<<----- lembrete
function verifica_maior(data,proc=2){
    now = new Date

    medida = 0
    if(proc == 2){medida = now.getFullYear()}
    if(proc == 1){medida = now.getMonth()}
    if(proc == 0){medida = now.getDate()}




    if(data[proc] == medida){
        if(proc==0){
            return false;
        }
        return verifica_maior(data,proc=proc-1);
    }
    if(data[proc] > medida){

        return true;
    }
    if(data[proc] < medida){
        return false;
    }
}

console.log(verifica_maior([10,10,2023]))