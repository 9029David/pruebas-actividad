const laCajaDePandora = (numero) => {
    if (numero % 2 === 0) {
      // Si el número es par, se convierte a binario
      return numero.toString(2);
    } else {
      // Si el número es impar, se convierte a hexadecimal
      return numero.toString(16); 
    }
  };

  console.log(laCajaDePandora(123)); // imprime "7b"
  console.log(laCajaDePandora(456)); // imprime "1c2"

  