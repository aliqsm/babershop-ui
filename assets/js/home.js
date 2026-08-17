const categoryButtons = document.querySelectorAll('.category-tabs button');
const cardItems = document.querySelectorAll('.card-item');

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const cat = btn.dataset.category;
        cardItems.forEach(card => {
            if (cat === 'all' || card.dataset.category === cat) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});


// Fomart Price
const prices = document.querySelectorAll('.price');
prices.forEach(price => {
    let value = parseInt(price.textContent.replace(/[^0-9]/g, ''), 10);
    if (!isNaN(value)) {
        price.textContent = value.toLocaleString('fa-IR') + ' تومان';
    }
});


// Navbar Buttons
const navbarItems = document.querySelectorAll('.menu-bar-item');
navbarItems.forEach(navbarItem => {
    navbarItem.addEventListener('click', () => {
        navbarItems.forEach(nav => {
            nav.classList.remove('active');
        });
        navbarItem.classList.add('active');
    })
})