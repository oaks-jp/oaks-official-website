const menuList = [
    {
        text: 'TOP',
        link: '/'
    },
    {
        text: 'NEWS',
        link: '/theme/news.html'
    },
    {
        text: 'DISCOGRAPHY',
        link: '/discography/discography.html'
    },
    {
        text: 'VIDEO',
        link: '/theme/video.html'
    },
    {
        text: 'CONTACT',
        link: '/theme/contact.html'
    },
    {
        text: 'LINK',
        link: '/theme/link.html'
    }
];

const menulistContainer = document.getElementById('menulist');
menuList.forEach(data => {
    const list = document.createElement('li');
    const link = document.createElement('a');
    link.href = data.link;
    link.textContent = data.text;

    list.appendChild(link);
    menulistContainer.appendChild(list);
});

const snsData = [
    {
        src: '/images/sns/instagram.png',
        alt: 'instagram',
        link: 'https://www.instagram.com/oaks_insta/'
    },
    {
        src: '/images/sns/x.png',
        alt: 'x',
        link: 'https://x.com/oaks__x'
    },
    {
        src: '/images/sns/tiktok.png',
        alt: 'tiktok',
        link: 'https://www.tiktok.com/@oaks_tiktok'
    },
    {
        src: '/images/sns/youtube.png',
        alt: 'youtube',
        link: 'https://www.youtube.com/@oaks_youtube'
    }
];

const snsContainer = document.getElementById('sns');
snsData.forEach(data => {
    const link = document.createElement('a');
    link.href = data.link;
    link.target = '_blank';

    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    img.loading = "lazy";

    link.appendChild(img);
    snsContainer.appendChild(link);
});

const musicData = [
    {
        src: '/images/sns/applemusic.png',
        alt: 'applemusic',
        link: 'https://music.apple.com/jp/artist/oaks/1783106143'
    },
    {
        src: '/images/sns/spotify.png',
        alt: 'spotify',
        link: 'https://open.spotify.com/intl-ja/artist/0So0s1hmMEQGi0iLRFLfkN?si=G2o5yC8PS0qJQyQdYGjXoA'
    },
    {
        src: '/images/sns/amazonmusic.png',
        alt: 'amazonmusic',
        link: 'https://music.amazon.co.jp/artists/B0DR8J2X5T/oaks'
    },
    {
        src: '/images/sns/music.png',
        alt: 'other',
        link: 'https://big-up.style/hp1Rxp0GXQ'
    }
];

const musicContainer = document.getElementById('music');
musicData.forEach(data => {
    const link = document.createElement('a');
    link.href = data.link;
    link.target = '_blank';

    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    img.loading = "lazy";

    link.appendChild(img);
    musicContainer.appendChild(link);
});

(
    function ($) {
        var $nav = $('#navArea');
        var $btn = $('.toggle_btn');
        var $mask = $('#mask');
        var open = 'open';
        // menu open close
        $btn.on('click', function () {
            $('#iconlist a img').hide();
            if (!$nav.hasClass(open)) {
                $nav.addClass(open);

                setTimeout(function () {
                    $('#iconlist a img').fadeIn();
                }, 350);

            } else {
                $nav.removeClass(open);
            }
        });
        // mask close
        $mask.on('click', function () {
            $nav.removeClass(open);
        });
    }
)(jQuery);
