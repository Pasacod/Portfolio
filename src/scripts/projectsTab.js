const tabs = Array.from(document.querySelectorAll('.tab__button'));
const tabContents = Array.from(document.querySelectorAll('.tab__content'));

tabs[0].classList.add('active-tab');
tabContents[0].classList.add('active-tab-content');

tabs.forEach(tab => {

  Array.from(tab.children).forEach(child => {
    child.addEventListener('click', () => {
      tab.classList.add('active-tab');
      tabs.filter(otherTab => otherTab !== tab).forEach(otherTab => otherTab.classList.remove('active-tab'));

      const indexToShow = tabs.indexOf(tab);
      tabContents.forEach(tabContent => tabContent.classList.remove('active-tab-content'));
      tabContents[indexToShow].classList.add('active-tab-content');
    });
  });

  tab.addEventListener('click', () => {
    tab.classList.add('active-tab');
    tabs.filter(otherTab => otherTab !== tab).forEach(otherTab => otherTab.classList.remove('active-tab'));

    const indexToShow = tabs.indexOf(tab);
    tabContents.forEach(tabContent => tabContent.classList.remove('active-tab-content'));
    tabContents[indexToShow].classList.add('active-tab-content');
  });
});