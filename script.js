function valorMercadoria(quantidade, valorUnidade) {
   return valorUnidade * quantidade
}

function icms(valorTotal, icms) {   
    return valorTotal * icms / 100
}

function calculoIpi(valorTotal, ipi) {
    return valorTotal * ipi / 100
}

function calculoPis(valorTotal, pis) {
    return valorTotal * pis / 100
}

function calculoCofins(valorTotal, cofins) {
    return valorTotal * cofins / 100
}


console.log('Supermercado Dosul: R$' , valorMercadoria(4.50, 350));
console.log('ICMS: R$', icms(1575, 18));
console.log('IPI: R$', calculoIpi(1575, 4));
console.log('PIS: R$', calculoPis(1575, 1.86));
console.log('COFINS: R$', calculoCofins(1575, 8.54));

console.log("***********************************************************")

console.log('Supermercado Zottis: R$' , valorMercadoria(4.50, 400));
console.log('ICMS: R$', icms(1800, 18));
console.log('IPI: R$', calculoIpi(1800, 4));
console.log('PIS: R$', calculoPis(1800, 1.86));
console.log('COFINS: R$', calculoCofins(1800, 8.54));


