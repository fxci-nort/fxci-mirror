function init() {
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(51.622762928200125, -0.10523263147600954), // New York
        styles: [
            {
                'featureType': 'all',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'color': '#feb646',
                    },
                ],
            },
            {
                'featureType': 'all',
                'elementType': 'labels.text.fill',
                'stylers': [
                    {
                        'gamma': 0.01,
                    },
                    {
                        'lightness': 20,
                    },
                ],
            },
            {
                'featureType': 'all',
                'elementType': 'labels.text.stroke',
                'stylers': [
                    {
                        'saturation': -31,
                    },
                    {
                        'lightness': -33,
                    },
                    {
                        'weight': 2,
                    },
                    {
                        'gamma': 0.8,
                    },
                ],
            },
            {
                'featureType': 'all',
                'elementType': 'labels.icon',
                'stylers': [
                    {
                        'visibility': 'off',
                    },
                ],
            },
            {
                'featureType': 'landscape',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'lightness': 30,
                    },
                    {
                        'saturation': 30,
                    },
                ],
            },
            {
                'featureType': 'poi',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'saturation': 20,
                    },
                ],
            },
            {
                'featureType': 'poi.park',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'lightness': 20,
                    },
                    {
                        'saturation': -20,
                    },
                ],
            },
            {
                'featureType': 'road',
                'elementType': 'geometry',
                'stylers': [
                    {
                        'lightness': 10,
                    },
                    {
                        'saturation': -30,
                    },
                ],
            },
            {
                'featureType': 'road',
                'elementType': 'geometry.stroke',
                'stylers': [
                    {
                        'saturation': 25,
                    },
                    {
                        'lightness': 25,
                    },
                ],
            },
            {
                'featureType': 'water',
                'elementType': 'all',
                'stylers': [
                    {
                        'lightness': -20,
                    },
                ],
            },
        ],
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    new google.maps.Marker({
        position: new google.maps.LatLng(51.622762928200125, -0.10523263147600954),
        map: map,
    });
}




$(document).on('click', function (event) {
    if (!$(event.target).closest('.header__lang-current').length) {
        $('.header__lang-list').removeClass('d-flex');
    }
});

$(document).on('click', '.header__lang-current', function () {
    $('.header__lang-list').toggleClass('d-flex')
});

let plan = 'swing'
let preference = 'default'

// const updatePlanData = (plan, preference, isMobile = false) => {
//     $.get(`https://fxci.com/plans-update/?plan=${plan}&preference=${preference}&is_mobile=${isMobile}`, function (data) {
//         if (isMobile) {
//             $('.mb-plans-list').html(data)
//         } else {
//             $('.plans-table__detail-upd').html(data)
//         }
//         appendParamsToLinks();
//     })

// }

$(document).on('click', '.challenges__card-1-btn', function () {
    $('.tab-name[data-key="' + $(this).data('plan') + '"]').click();
    $('.mb-plans-tab[data-key="' + $(this).data('plan') + '"]').click();
})

$(document).on('click', '.tab-name', function () {

    plan = $(this).data('key')

    $('.tab-name').removeClass('active');
    $(this).addClass('active');

    $('.plans__filters').removeClass('active');
    $('.plans__filters-' + plan).addClass('active');

    $('.plans__filters-item').removeClass('active')
    $('.plans__filters-item-' + plan + ':first').addClass('active')

    preference = $('.plans__filters-item-' + plan + '.active').data('preference-key') ?? 'default';
    updatePlanData(plan, preference)
})

$(document).on('click', '.mb-plans-tab', function () {
    plan = $(this).data('key')

    $('.mb-plans-tab').removeClass('active');
    $(this).addClass('active');

    $('.mb-plan-reference').removeClass('active');
    $('.mb-plan-reference-' + plan).addClass('active');

    $('.mb-plans__filters-item').removeClass('active')
    $('.mb-plans__filters-item-' + plan + ':first').addClass('active')

    $('.plan-price-filter-item-instant').addClass('d-none')

    if (plan === 'instant') {
        $('.plan-price-filter-item-instant').removeClass('d-none')
    }

    preference = $('.mb-plans__filters-item-' + plan + '.active').data('preference-key') ?? 'default';
    updatePlanData(plan, preference, true)
})

$(document).on('click', '.mb-plans__filters-item', function () {
    $('.mb-plans__filters-item').removeClass('active');
    $(this).addClass('active');
    preference = $(this).data('preference-key') ?? 'default';
    updatePlanData(plan, preference, true)
})

$(document).on('click', '.plans__filters-item', function () {
    $('.plans__filters-item').removeClass('active');
    $(this).addClass('active');
    preference = $(this).data('preference-key') ?? 'default';
    updatePlanData(plan, preference)
})

$(document).on('click', '.btn-mob-nav', function () {
    $('.mb-header').toggleClass('opened');
    $('.mb-nav-content').toggleClass('d-none');
})

$(document).on('click', '.mb-nav-dropdwn', function () {
    $(this).find('.nav-dropdwn-list').toggleClass('d-none');
})


$(document).on("click", '.plan-price-filter-item', function () {
    /*$('.plan-price-filter-item').removeClass('active');
    $(this).addClass('active');*/
    var targetAccount = $(this).data("target-account");

    var targetItem = $('.mb-plans-list-item[data-account="' + targetAccount + '"]');

    if (targetItem.length) {
        var scrollContainer = $(".mb-plans-list");
        var scrollLeft = targetItem.position().left + scrollContainer.scrollLeft() - (scrollContainer.width() / 2) + (targetItem.outerWidth() / 2);

        scrollContainer.animate({ scrollLeft: scrollLeft }, 500);
    }
});

$('.mb-plans-list').on("scroll", function () {
    var scrollContainer = $(this);
    var scrollCenter = scrollContainer.scrollLeft() + (scrollContainer.width() / 2);

    // Перебираем все элементы .mb-plans-list-item
    $(".mb-plans-list-item").each(function () {
        var item = $(this);
        var itemLeft = item.position().left + scrollContainer.scrollLeft();
        var itemRight = itemLeft + item.outerWidth();

        // Проверяем, находится ли центр прокрутки внутри элемента
        if (scrollCenter >= itemLeft && scrollCenter <= itemRight) {
            var account = item.data("account");

            // Добавляем active к соответствующему plan-price-filter-item
            $(".plan-price-filter-item").removeClass("active");
            $('.plan-price-filter-item[data-target-account="' + account + '"]').addClass("active");
        }
    });
});


function animateNumber(element, start, end, duration) {
    $({ numberValue: start }).animate({ numberValue: end }, {
        duration: duration,
        easing: 'linear',
        step: function () {
            $(element).text(this.numberValue.toFixed(2));
        }
    });
}

$(document).ready(function () {
    const elements = [".profit-left-one span", ".profit-left-two span", ".profit-right-one span", ".profit-right-two span", ".profit-right-three span"];

    setInterval(function () {
        const randomElement = elements[Math.floor(Math.random() * elements.length)];
        const currentValue = parseFloat($(randomElement).text());
        const newEndValue = Math.random() * (5000 - 1300) + 1300;
        animateNumber(randomElement, currentValue, newEndValue, 500);
    }, 2000);
});

$(document).ready(function () {
    let isMouseDown = false;
    let startX;
    let scrollLeft;
    let activeScrollElement = null;

    $('.scroll-wrap').each(function () {
        const scrollElement = $(this);

        if (scrollElement[0].scrollWidth > scrollElement[0].clientWidth) {
            scrollElement.on('mousedown', function (e) {
                isMouseDown = true;
                activeScrollElement = scrollElement;
                startX = e.pageX - scrollElement.offset().left;
                scrollLeft = scrollElement.scrollLeft();
                scrollElement.addClass('active');
                e.preventDefault();
            });
        }
    });

    $(document).on('mousemove', function (e) {
        if (!isMouseDown || !activeScrollElement) return;
        const x = e.pageX - activeScrollElement.offset().left;
        const walk = (x - startX) * 2;
        activeScrollElement.scrollLeft(scrollLeft - walk);
    });

    $(document).on('mouseup', function () {
        if (activeScrollElement) {
            activeScrollElement.removeClass('active');
            activeScrollElement = null;
        }
        isMouseDown = false;
    });
});


$(document).ready(function () {
    const container = $('.about-journey .blocks-container');
    const blocks = $('.about-journey  .block');
    const blockHeight = blocks.outerHeight(true); // Высота одного блока (с учетом margin/padding)
    let currentIndex = 0; // Текущий индекс блока

    // Копируем элементы для бесконечного слайдинга
    container.append(blocks.clone());

    function slideUp() {
        currentIndex++;
        const scrollHeight = currentIndex * 280;

        // Анимация сдвига вверх
        container.animate(
            { scrollTop: scrollHeight },
            1000,
            function () {
                // Если достигли конца оригинальных элементов, сбрасываем позицию
                if (currentIndex >= blocks.length) {
                    container.scrollTop(0); // Возвращаемся в начало
                    currentIndex = 0;
                }
            }
        );
    }

    // Запускаем интервал каждые 10 секунд
    setInterval(slideUp, 3000);
});


$(document).ready(function () {
    $('.trader-feedback__list-col').each(function (index) {
        let $col = $(this);
        let itemHeight = $col.find('.trader-feedback__item').outerHeight(); // Высота одного элемента
        let totalHeight = $col[0].scrollHeight; // Общая высота скроллируемого контента
        let scrollInterval; // Интервал для автоматической прокрутки
        //let direction = index % 2 === 0 ? 1 : -1; // Чередование направления: 1 — вниз, -1 — вверх
        let direction = 1; // Чередование направления: 1 — вниз, -1 — вверх

        // Установим фиксированную скорость прокрутки
        const scrollSpeed = 50; // Скорость прокрутки
        const animationStep = 1; // Шаг прокрутки (в пикселях)

        // Функция для автоматической прокрутки

        const ddd = [0, 0, 0][index - 1]

        function startAutoScroll() {
            scrollInterval = setInterval(function () {
                let scrollTop = $col.scrollTop() + ddd;

                if (direction === 1) {
                    // Прокрутка вниз
                    if (scrollTop + $col.height() >= totalHeight - 1) {
                        $col.append($col.children().first());
                        //  $col.scrollTop(scrollTop - itemHeight);
                    }
                    $col.stop().animate({ scrollTop: scrollTop + 1 }, scrollSpeed, 'linear');
                } else {
                    // Прокрутка вверх
                    if (scrollTop <= 0) {
                        $col.prepend($col.children().last());
                        $col.scrollTop(scrollTop + itemHeight);
                    }
                    $col.stop().animate({ scrollTop: scrollTop - animationStep }, scrollSpeed, 'linear');

                }
            }, scrollSpeed);
        }

        // Запуск прокрутки
        startAutoScroll();

        // Отключение прокрутки для колонок
        /* $col.on('wheel touchmove', function (e) {
             e.preventDefault();
             e.stopPropagation(); // Пропускаем событие для общего скролла
         });*/
    });
});


var menuHeight = $('header').outerHeight() + 50;

$('.scroll-to').on('click', function (e) {
    e.preventDefault();

    var target = $(this).data('target');

    $('html, body').animate({
        scrollTop: $(target).offset().top - menuHeight
    }, 1000);

});


/*
$(document).ready(function () {
    $('.trader-feedback__list-col').each(function (index) {
        let $col = $(this);
        let itemHeight = $col.find('.trader-feedback__item').outerHeight(); // Высота одного элемента
        let totalHeight = $col[0].scrollHeight; // Общая высота скроллируемого контента
        let scrollInterval; // Интервал для автоматической прокрутки
        let direction = index % 2 === 0 ? 1 : -1; // Чередование направления: 1 — вниз, -1 — вверх

        // Функция для автоматической прокрутки
        function startAutoScroll() {
            scrollInterval = setInterval(function () {
                let scrollTop = $col.scrollTop();

                // Проверка направления и позиции
                if (direction === 1) {
                    // Прокрутка вниз
                    if (scrollTop + $col.height() >= totalHeight - 1) {
                        $col.append($col.children().first());
                        $col.scrollTop(scrollTop - itemHeight);
                    } else {
                        $col.scrollTop(scrollTop + 1);
                    }
                } else {
                    // Прокрутка вверх
                    if (scrollTop <= 0) {
                        $col.prepend($col.children().last());
                        $col.scrollTop(scrollTop + itemHeight);
                    } else {
                        $col.scrollTop(scrollTop - 1);
                    }
                }
            }, 45); // Скорость автоматической прокрутки
        }

        // Остановка автоматической прокрутки
        function stopAutoScroll() {
            clearInterval(scrollInterval);
        }

        // Запуск прокрутки при загрузке
        startAutoScroll();

        // Остановка прокрутки при наведении и возобновление при выходе
        $col.on('mouseenter', function () {
            stopAutoScroll();
        });

        $col.on('mouseleave', function () {
            startAutoScroll();
        });

        // Функция для проверки и дублирования элементов при ручном скролле
        function checkScroll() {
            let scrollTop = $col.scrollTop();

            if (scrollTop + $col.height() >= totalHeight - 1) {
                $col.append($col.children().first());
                $col.scrollTop(scrollTop - itemHeight);
            } else if (scrollTop <= 0) {
                $col.prepend($col.children().last());
                $col.scrollTop(scrollTop + itemHeight);
            }
        }

        // Привязываем функцию к событию прокрутки для ручного скролла
        $col.on('scroll', checkScroll);
    });
});*/


function isEmail(email) {
    let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$(document).on('click', '.subscribe__form .btn-blue', function (e) {
    e.preventDefault();

    let email = $('#subscribe__input-email')

    $('.thank_you').addClass('d-none');
    email.removeAttr('style', '')

    let errors = false

    if (email.val() === '' || isEmail(email.val()) === false) {
        email.css('border', '1px solid #fb2a2a');
        errors = true
    }

    if (!errors) {
        $(this).remove()
        $('.thank_you').removeClass('d-none');
    }

})


$(document).on('click', '.contact-form-submit-button', function (e) {
    e.preventDefault();

    let name = $('#contact-input-name');
    let account_number = $('#contact-input-account_number');
    let email = $('#contact-input-email');
    let message = $('#contact-input-message');
    let _token = $('#_token');


    name.removeAttr('style', '')
    account_number.removeAttr('style', '')
    email.removeAttr('style', '')
    message.removeAttr('style', '')

    $('.contact-mes-send').addClass('d-none');

    let errors = false

    if (name.val() === '') {
        name.css('border', '1px solid #fb2a2a');
        errors = true
    }

    if (account_number.val() === '') {
        account_number.css('border', '1px solid #fb2a2a');
        errors = true
    }

    if (email.val() === '' || isEmail(email.val()) === false) {
        email.css('border', '1px solid #fb2a2a');
        errors = true
    }

    if (message.val() === '') {
        message.css('border', '1px solid #fb2a2a');
        errors = true
    }

    let oldText = $(this).text()

    if (!errors) {
        $(this).text('Sending...')
        $(this).attr('disabled', 'true');
        $.post('/send-message-to-support/', {
            '_token': _token.val(),
            'name': name.val(),
            'account_number': account_number.val(),
            'email': email.val(),
            'message': message.val()
        }, (res) => {
            if (res.status === 'ok') {
                $('.contact-mes-send').removeClass('d-none');
            } else {
                alert('Something went wrong!');
            }
            $(this).text(oldText)
            $(this).removeAttr('disabled');
            name.val('')
            account_number.val('')
            email.val('')
            message.val('')
        })

    }

})


function setItemWithExpiry(key, value, days) {
    const now = new Date();
    const expiryTime = now.getTime() + days * 24 * 60 * 60 * 1000; /* const expiryTime = now.getTime() + 20 * 1000; */
    localStorage.setItem(key, value);
    localStorage.setItem(`${key}Expiry`, expiryTime);
}

function getItemFromCookie(key) {

    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${key}=`))
        ?.split('=')[1];

    if (cookieValue) {
        return decodeURIComponent(cookieValue);
    }

    return null;
}

function getItemWithExpiry(key) {

    const now = new Date();

    const expiryTime = localStorage.getItem(`${key}Expiry`);
    if (expiryTime && now.getTime() > expiryTime) {
        localStorage.removeItem(key);
        localStorage.removeItem(`${key}Expiry`);
        return null;
    }
    return localStorage.getItem(key);
}

// Параметры, которые нужно отслеживать и их источники в localStorage
const trackedParams = [
    { key: 'clickid', paramName: 'clickid', defaultValue: null },
    { key: 'lang', paramName: 'lang', defaultValue: 'en' },
    { key: 'cnv_id', paramName: 'cnv_id', defaultValue: null },
    { key: 'ref', paramName: 'ref', defaultValue: null } // Пример параметра с дефолтным значением
];

// Проверяем параметры в URL и записываем их в localStorage (если отсутствуют, задаём значения по умолчанию)
const urlParams = new URLSearchParams(window.location.search);
trackedParams.forEach(({ key, defaultValue }) => {
    const paramValue = urlParams.get(key) || getItemWithExpiry(key) || defaultValue;
    if (paramValue) {
        setItemWithExpiry(key, paramValue, 7);
    }
});

// Получаем отслеживаемые параметры из localStorage с учётом срока действия
const storedParams = trackedParams.reduce((acc, { key, paramName }) => {
    const value = urlParams.get(key) || getItemFromCookie(key) || getItemWithExpiry(key);
    if (value) {
        acc[paramName] = value;
    }
    return acc;
}, {});

// function appendParamsToLinks() {
//     document.querySelectorAll('a').forEach(link => {
//         const hasClassSetClick = link.classList.contains('set_clickid');
//         const href = link.getAttribute('href');

//         if (hasClassSetClick || href.includes('dashboard')) {
//             const linkUrl = new URL(href, window.location.origin);

//             // Добавляем отслеживаемые параметры
//             Object.entries(storedParams).forEach(([paramName, value]) => {
//                 linkUrl.searchParams.set(paramName, value);
//             });

//             link.setAttribute('href', linkUrl.toString());
//         }
//     });
// }

// // Применяем параметры к существующим ссылкам
// if (Object.keys(storedParams).length > 0) {
//     appendParamsToLinks();
// }