// 1 - permettere l'inserimento con un prompt del numero di chilometri che si intende percorrere

let num_km = parseInt(prompt("inserire il numero di kilometri"));
console.log(num_km);

// 2 - pemettere l'inserimento con um prompt della prorpria età

let age = parseInt(prompt("inserire l'età"));
console.log(age);

// 3 - moltiplicare il prezzo di 0.21€ per il numero di chilometri inseriti dall'utente

let price_km = (num_km * 0.21).toFixed(2);
let price_km_displayed = `Prezzo di listino: ${price_km}€`;
console.log(price_km_displayed);


// 4 - calcolare gli eventuali sconti sul prezzo ottenuto in base all'età inserita dall'untente

if (age >= 18 && age < 65) {
	let price = price_km;
	let price_displayed = `Prezzo scontato: ${price}€`;
	console.log(price_displayed);
}

else if (age < 18) {
	let price = (price_km * 0.8).toFixed(2);
	let price_displayed = `Prezzo: ${price}€`;
	console.log(price_displayed);
}

else if (age >= 65) {
	let price = (price_km * 0.6).toFixed(2);
	let price_displayed = `Prezzo scontato: ${price}€`;
	console.log(price_displayed);
}
