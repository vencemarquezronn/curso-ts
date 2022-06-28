enum ContractStatus {
   Permanente,
   Temporal,
   Pasante
} // Tipo de enumeración

let employeeStatus: ContractStatus = ContractStatus.Temporal; // Tipo de objeto > de clase

console.log(ContractStatus[employeeStatus]);

/* Tipos any y unknown en TS */

let randomValue: any; // La variable puede tomar cualquier valor
randomValue = "Mateo";
console.log(randomValue);
randomValue = true;
console.log(randomValue);

/*
* Si se cambia any por unknown
* no se podrán acceder a las
* propiedades de la variable
*/

/* Aserción de tipos */

let random_value: unknown;
random_value = "Mateo";
// random_value = 24;

if (typeof random_value === "string") {
   console.log((random_value as string).toLocaleUpperCase());
} else {
   console.log("Error - Se esperaba un string.")
}