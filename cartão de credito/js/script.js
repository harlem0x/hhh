// cria as variasves
// preciso pegar o valor dos input
/*
valur
professor mostrou 
obs: deve ser letra maisculas 
*/
const regex = /^[A-Z\s]*$/;
const input=document.getElementById('cardholder-name')
const valor=document.getElementById('saida')
const numeroCard=document.getElementById('card-number')
const numero= document.getElementById('numero')
const regexnumero = /^\d*$/;
input.addEventListener('input', ()=>{
  
    if (regex.test(input.value)){
        valor.textContent = input.value;
    }else{
        input.value =input.value.slice(0,-1)
    }
})

numeroCard.addEventListener('input', () => {
  
    if (regexnumero.test(numeroCard.value)) {
      
      numero.textContent = numeroCard.value.replace(/(.{4})/g, "$1 ").trim();
    } else {
      numeroCard.value = numeroCard.value.slice(0, -1); 
    }
  });

/*
imagem do icon quando colocar o primeiro numero aqui a badeira deve mudar para 
*/