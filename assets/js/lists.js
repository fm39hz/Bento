// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = () => {
  for (const list of CONFIG.firstlistsContainer) {
    let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="listIcon" icon-name="${list.icon}"></i>
          ${list.links.map((item) => {
            return (
              <a
                target={CONFIG.openInNewTab ? "_blank" : ""}
                href={item.link}
                class="listItem"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      `;
    const position = "beforeend";
    lists_1.insertAdjacentHTML(position, item);
  }
};

const generateSecondListsContainer = () => {
  for (const list of CONFIG.secondListsContainer) {
    let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>
          ${list.links.map((item) => {
            return (
              <a
                target={CONFIG.openInNewTab ? "_blank" : ""}
                href={item.link}
                class="listItem"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      `;
    const position = "beforeend";
    lists_2.insertAdjacentHTML(position, item);
  }
};

const generateLists = () => {
  switch (CONFIG.bentoLayout) {
    case "bento":
      generateFirstListsContainer();
      break;
    case "lists":
      generateFirstListsContainer();
      generateSecondListsContainer();
      break;
    default:
      break;
  }
};

generateLists();
