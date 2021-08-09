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
        let anchor = document.createElement('a');
        anchor.href = `#${section.id}`;
        anchor.textContent = section.title;
        link.classList = 'nav__link';
        link.appendChild(anchor);
        navBar.appendChild(link);
    }

};

/**
 * @description Create sections and update  the main element
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
        sectionDiv.id = section.id;
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

/**
 * @description mark nav link and corresponding section as active
 * @param {*} link 
 */
const activeState = (link) => {
    link.classList.add('active');
    document.querySelector(`${link.hash} h2`).classList.add('active');
};

const removeActiveState = (links) => {
    links.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`${link.hash} h2`).classList.remove('active');
    })
}

/**
 * @description scroll to corresponding section when nav link clicked
 */
const scrollToSection = () => {
    const links = document.querySelectorAll('.nav__link a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = document.querySelector(link.hash);
            href.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            // removeActiveState(links);
            activeState(link, href);
        });
    });
};


updateNavBar();
createSections();
scrollToSection();