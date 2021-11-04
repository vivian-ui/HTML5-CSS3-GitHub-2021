//Palíndromo solução 01
function verificaPalindromo(string){
    if(!string) return "string inexistente"

    return string.split("").reverse().join("") === string;
}

//Palíndromo solução 02
function verificaPalindromo2(string){
    if(!string) return "string inexistente"

    for(let i=0; i < string.length / 2; i++){   // divisão por 2 percorre metade da string
        if(string[i] !== string[string.length - 1 - i]){ 
            return false;
        }
    }
    return true;
}
