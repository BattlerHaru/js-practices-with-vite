import {heroes} from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb2";
  const id2 = "5d86371f1efebc31def272e2";

  findHero(id1, (error, hero1) => {
    // element.innerHTML = hero1?.name || `Hero with id ${id} not found`;
    if (error) {
      element.innerHTML = error;
      return;
    }

    element.innerHTML = `${hero1.name}`;
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String|Null, hero: Object)=>void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`Hero with id ${id} not found`);
    return;
  }

  callback(null, hero);
};
