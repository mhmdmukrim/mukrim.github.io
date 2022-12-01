const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});

function re() {
    location.reload();
}

function txt() {
    location.href = "https://mail.google.com/mail/u/0/h/1oucn5zvke7vo/?&cs=b&pv=tl&v=b&s=s";
}

function wp() {
    location.href = "https://chat.whatsapp.com/KpjTGuXKKKcArnSLOCf0ef/";
}

function fb() {
    location.href = "https://www.facebook.com/Akurana-Public-Library-101173885395542/";
}