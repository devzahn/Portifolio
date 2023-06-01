function makeLatinSquare(n) {
  let num = []; 
  let generate = [];
  for (let i = 1; i <= n; i++) {
    generate.push(i)
    num.push(generate);
  }

  for(let i = 1; i < n; i++ ){
    let rotor = generate[i - 1]; /* adiciona o rotor antes de generate */
    let novoRotor = rotor.slice(1).concat(rotor[0]);/* A linha anterior é rotacionada e remove o elemento anterior, criando uma nova linha */

    generate.push(novoRotor);
  }

  return generate;
}
