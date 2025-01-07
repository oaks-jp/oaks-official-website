const head = document.head;

const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Caveat&display=swap';
head.appendChild(googleFontsLink);

const linkIconSvg = document.createElement('link');
linkIconSvg.rel = 'icon';
linkIconSvg.type = 'image/svg+xml';
linkIconSvg.href = '/favicon.svg';
head.appendChild(linkIconSvg);

const linkIconPng = document.createElement('link');
linkIconPng.rel = 'icon';
linkIconPng.type = 'image/png';
linkIconPng.href = '/favicon-96x96.png';
linkIconPng.sizes = '96x96';
head.appendChild(linkIconPng);

const appleTouchIcon = document.createElement('link');
appleTouchIcon.rel = 'apple-touch-icon';
appleTouchIcon.href = '/apple-touch-icon.png';
appleTouchIcon.sizes = '180x180';
head.appendChild(appleTouchIcon);

const linkIconIco = document.createElement('link');
linkIconIco.rel = 'icon';
linkIconIco.type = 'image/x-icon';
linkIconIco.href = '/favicon.ico';
head.appendChild(linkIconIco);

const linkManifest = document.createElement('link');
linkManifest.rel = 'manifest';
linkManifest.href = '/site.webmanifest';
head.appendChild(linkManifest);

const metaAppleWebAppTitle = document.createElement('meta');
metaAppleWebAppTitle.name = 'apple-mobile-web-app-title';
metaAppleWebAppTitle.content = 'oaks';
head.appendChild(metaAppleWebAppTitle);

$(function () {
    $("#header").load("/common/header.html");
    $("#menu").load("/common/menu.html");
    $("#footer").load("/common/footer.html");
});