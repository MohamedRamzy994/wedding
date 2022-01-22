var options = {
    strings: ['ستوديو البحراوى للأفراح والمناسبات', 'متخصصون فى تصوير الأفراح ',
        'تصوير الحفلات وأعياد الميلاد',
        'تجهيز وإعدادا وتصوير السيشن باحترافية', 'متخصصون فى تجهيز العرائس بأحدث الصيحات والموديلات'
    ],
    typeSpeed: 50,
    loop: true,
    loopCount: Infinity,
    shuffle: false
};

var typed = new Typed('.subtitle', options);
AOS.init();
var btn = $('#button');
var headermenu = $('#header');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    if ($(window).scrollTop() > 100) {

        headermenu.addClass('sticky');


    } else {
        headermenu.removeClass('sticky');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});