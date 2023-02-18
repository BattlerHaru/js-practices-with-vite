/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponent = (element) => {
  console.log(import.meta.env);
  const html = `
    Dev: ${import.meta.env.DEV} </br>
    Dev: ${import.meta.env.PROD} </br>

    `;
  element.innerHTML = html;
};
