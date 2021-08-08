// Store section data
// Create navbar list for section headings
// Create sections
// Check if a section is in viewport

/**
 * SectionData array 
 * Stores all sections as objects
 */
const sectionData = [
    {
        title: 'Fruits',
        description: `Excepteur non anim elit mollit aliquip commodo ad
        fugiat elit. Cupidatat laborum commodo voluptate
        exercitation. Eu culpa eu ullamco magna occaecat`,
        img: `./asset/fruits-unsplash-sm.jpg`,
        class: 'section__item',
        id: 'section--fruits',
    },
    {
        title: 'Vegatables',
        description: `Excepteur non anim elit mollit aliquip commodo ad
        fugiat elit. Cupidatat laborum commodo voluptate
        exercitation. Eu culpa eu ullamco magna occaecat`,
        img: `./asset/vegs-unsplash-sm.jpg`,
        class: 'section__item',
        id: 'section--vegs',
    },
    {
        title: 'Snacks',
        description: `Excepteur non anim elit mollit aliquip commodo ad
        fugiat elit. Cupidatat laborum commodo voluptate
        exercitation. Eu culpa eu ullamco magna occaecat`,
        img: `./asset/zach-rowlandson-snacks-unsplash-sm.jpg`,
        class: 'section__item',
        id: 'section--snacks',
    },
    
];

/**
 * @description Create navbar links with the section titles and Updates the navbar
 */
const updateNavBar = () => {
    const navBar = document.querySelector('.nav__links');
    for (const section of sectionData) {
        let link = document.createElement('li');
        link.textContent = section.title;
        link.classList = 'nav__link';
        navBar.appendChild(link);
    }

};

/**
 * @description Create sections and update the main element
 */
const createSections = () => {
    
    for (const section of sectionData) {
        const main = document.querySelector('main');
        const sectionDiv = document.createElement('section');
        const descriptionDiv = document.createElement('div');
        const imgDiv = document.createElement('div');
        const heading = document.createElement('h2');
        const para = document.createElement('p');
        const img = document.createElement('img');
        sectionDiv.classList = section.class;
        descriptionDiv.classList = 'item--description';
        imgDiv.classList = 'item__img'
        heading.textContent = section.title;
        para.textContent = section.description;
        img.setAttribute('src', section.img);

        descriptionDiv.append(heading, para);
        imgDiv.appendChild(img);

        sectionDiv.append(descriptionDiv, imgDiv);

        main.appendChild(sectionDiv);
    }
}

updateNavBar();
createSections();