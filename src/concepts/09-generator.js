/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
  const myGenerator = myFirstGeneratorFunction();

  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
  console.log(myGenerator.next());
};

function* myFirstGeneratorFunction() {
  // pausa
  yield "Primer Valor";
  yield "Segundo valor";
  yield "Tercer valor";
  yield "Cuarto valor";

  return "not more values";
  return "not more actions";
}
