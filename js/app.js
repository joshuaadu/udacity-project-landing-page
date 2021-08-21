// Store section data
// Create navbar list for section headings
// Create sections
// Check if a section is in viewport

/**
 * SectionData array 
 * Stores all sections as objects
 */
const sections = Array.from(document.getElementsByTagName('section'));

/**
 * @description check if section is in viewport with is it bounding client dimensions
 * @param {*} section 
 * @returns boolean of whether section is in viewport
 */
const isInView = (section) => {
    const rect = section.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * @description Create navbar links with the section titles and Updates the navbar
 */
const updateNavBar = () => {
    // Select ul for links
    const navBar = document.querySelector('.nav__links');
    // iterate through section data and create links in the nav bar
    for (const section of sections) {
        let link = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.href = `#${section.id}`;
        anchor.textContent = section.getAttribute('data-nav');
        link.classList = 'nav__link';
        link.appendChild(anchor);
        navBar.appendChild(link);
    }

};



/**
 * @description mark nav link and corresponding section as active
 * @param {*} section 
 */
const activeState = (section) => {
    // Select heading of the section
    const heading = document.querySelector(`#${section.id} h2`) || document.querySelector(`#${section.id} h1`);
    // Select all nav links in the header
    const links = document.querySelectorAll('.nav__link a');
    // Iterate through links and mark link with corresponding section as active
    links.forEach((link) => {
        console.log(link.hash);
        if(link.hash == `#${section.id}`){
            link.classList.add('active');
            heading.classList.add('active');
        } else link.classList.remove('active');
    })
};

/**
 * @description scroll to corresponding section when nav link clicked
 */
const scrollToSection = () => {
    const links = document.querySelectorAll('.nav__link a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(link.hash);
            section.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            activeState(section);
        });
    });
};

/**
 * @description Check which section is in Viewport while page is being scrolled and make active
 */
const pageScrolling = () => {
    const sections = document.querySelectorAll('.section');
    document.addEventListener('scroll', () => {
        console.log('scrolling');
        sections.forEach((section) => {
            const heading = document.querySelector(`#${section.id} h2`) || document.querySelector(`#${section.id} h1`);
            (isInView(section))?
            activeState(section): 
            heading.classList.remove('active');
        });
    });
};


updateNavBar();
scrollToSection();
pageScrolling();