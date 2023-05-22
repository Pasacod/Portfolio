const tabs = Array.from(document.querySelectorAll('.tab__button'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

// Ajouter la classe active-tab au premier onglet et à son contenu correspondant
tabs[0].classList.add('active-tab');
tabContents[0].classList.add('active-tab-content');

// Parcourir chaque élément .tab__button
tabs.forEach(tab => {

  // Parcourir chaque enfant de l'élément .tab__button
  Array.from(tab.children).forEach(child => {
    // Ajouter un événement de clic à chaque enfant
    child.addEventListener('click', () => {
      // Ajouter la classe active-tab à l'élément parent .tab__button
      tab.classList.add('active-tab');
      // Retirer la classe active-tab de tous les autres onglets
      tabs.filter(otherTab => otherTab !== tab).forEach(otherTab => otherTab.classList.remove('active-tab'));

      // Afficher le contenu correspondant à l'onglet cliqué
      const indexToShow = tabs.indexOf(tab);
      tabContents.forEach(tabContent => tabContent.classList.remove('active-tab-content'));
      tabContents[indexToShow].classList.add('active-tab-content');
    });
  });

  // Ajouter un événement de clic à l'élément .tab__button lui-même
  tab.addEventListener('click', () => {
    // Ajouter la classe active-tab à l'élément .tab__button
    tab.classList.add('active-tab');
    // Retirer la classe active-tab de tous les autres onglets
    tabs.filter(otherTab => otherTab !== tab).forEach(otherTab => otherTab.classList.remove('active-tab'));

    // Afficher le contenu correspondant à l'onglet cliqué
    const indexToShow = tabs.indexOf(tab);
    tabContents.forEach(tabContent => tabContent.classList.remove('active-tab-content'));
    tabContents[indexToShow].classList.add('active-tab-content');
  });
});