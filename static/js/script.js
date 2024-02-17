
document.addEventListener('DOMContentLoaded', getLocalLang)

var arrLang = {
    'eng': {
                'club__future-title_1': 'Future',
        'club__future-title_2': 'farmers',
        'club__future-title_3': 'of Kyrgyzstan',
        'club__mission-title': 'Our club mission',
        'club__mission-text': 'Increase the number of farmers and farming clubs by providing children with basic farming training. Our club members will learn how to cultivate the land, raise animals and organic products and have the opportunity to take home the harvest or sell it through our farms.',
        'club__mission-table_1': 'Membership in the Club of Future Farmers of Kyrgyzstan:',
        'club__mission-table_2': '7000 som/month (child)',
        'club__mission-table_3': 'Weekly Saturday meetings',
        'club__mission-table_4': 'Lunch in Hyde Park',
        'club__mission-table_5': 'Gardening class',
        'club__mission-table_6': 'English practice',
        'club__mission-table_7': 'Hiking and games',
        'club__mission-table_8': 'Free garden products',
        'about': 'About Us',
        'club': 'Farming Club',
        'pasture': 'Pasture raised chicken',
        'home': 'Home',
        'contact': 'Contact',
        'orange-block': 'Discover the Nutritional Power of Pasture-Raised Chicken with Renew!',
        'main__text': 'Renew is a collection of local farms in Kyrgyzstan, passionate about sustainable, regenerative farming practices. We are farmers who are committed to raising the healthiest and most nutritious chicken.',
        'main__button': 'Сontact us',
        'social__button': 'Сontact us',
        'social__address': 'Kyrgyzstan, Chui region, Leskhoz village, Gidrovskaya street 12/1',
        'apppa': 'Renew Regenerative Farms is a member of the American Pastured Poultry Producers Association',
        'subscribe__text__h5': '*Required fields',
        'name': "Name*",
        "phone": "Phone number*",
        "email": 'Email*',
        'comment': 'Comment',
        "submit_2": "Send",
        "submit": "Send",
        'chick__box__h3': 'Why choose pasture-raised chickens?',
        'chick__box__p': "Here's a deep dive into the benefits",
        'box__1__h4': 'Nutritional Superiority',
        'box__1__p': "Our pasture-raised chicken meat is a nutritional powerhouse. It's packed with higher levels of essential nutrients such as omega-3 fatty acids, vitamins (like vitamins A, D, E, and the B vitamin complex), and minerals (including selenium and iron) compared to commercially raised chicken.",
        'box__3__h4': 'Balanced Fats',
        'box__3__p': 'Our pasture-raised chickens have a healthier fat profile: they have lower levels of unhealthy saturated fats and higher levels of heart-healthy monounsaturated and polyunsaturated fats.',
        'box__2__h4': 'No Harmful Chemicals',
        'box__2__p': 'We do not use any harmful pesticides, antibiotics, or synthetic growth hormones, ensuring your food is free from chemicals and is healthy and wholesome.',
        'box__4__h4': 'Omega-3 Rich',
        'box__4__p': 'Our chickens graze on fresh pasture, allowing them to accumulate higher levels of omega-3 fatty acids, which are known to support heart health and reduce inflammation.',
        'chick__box__2': 'Our pasture-raised chickens vs. commercially raised',
        'vs__box__1__h4': 'Quality of Life',
        'vs__box__1__p': 'Our chickens enjoy a life of freedom, with access to fresh grass, insects, and daily moves to new pastures, resulting in happier, healthier birds.',
        'vs__box__2__h4': 'Freshness & Flavor',
        'vs__box__2__p': 'The varied diet and exercise our chickens receive make their meat not only more nutritious but also more flavorful and succulent.',
        'chick__box__last': 'Support Renew Regenerative Farms to savor the benefits of nutritionally superior, ethically raised chicken and contribute to the regeneration of our precious soils and communities. Join us in making a difference, one regenerative farm at a time!',
        'about__text__h3': 'Meet Your Farmer',
        'about__text__p': 'Bolot is a skilled and motivated young farmer from Kyrgyzstan, north of Bishkek. We are proud to collaborate with him and grateful to farmers like him, who are the future of Kyrgyz agriculture. Bolot and his family, and James, raised broilers in three mobile coops using regenerative agriculture practices. Our chickens are raised without antibiotics or hormones, using only 100% natural methods to ensure their health and happiness.',
        'col__1__p1': 'James',
        'col__1__p2': 'For four generations James’ family has been involved in farming. James and his wife moved from the USA to Kyrgyzstan in 2016. They are thankful for the opportunity to help to develop agriculture in Kyrgyzstan!',
        'col__2__p1': 'The chickens were given fresh pasture each day, and left behind valuable fertilizer, rejuvenating Bolot’s field.',
        'col__2__p2': 'Renew hand-processes all of our broilers, giving you the highest quality chicken.',
        'col__3': 'Thank you for supporting Renew Regenerative Farms! Our goal is to bring redemption to the land and lives that we touch.',
        'contacts__text': 'Demand for our chicken has increased and we quickly sold out. If you want to order chicken meat from our next batch, please contact us! And please let us know if you have any questions or want more information! Thank you for your interest!',
        'contacts__form__h2': 'We are glad that you chose us!',
        'inform': 'Contact us here for more information',
        'club-join': 'Contact us here to join our club',
        'order': 'Contact us here to place an order!',
        'comment_1': 'Comment'
    },

    'ru': {
        'club__future-title_1': 'Будущие',
        'club__future-title_2': 'фермеры',
        'club__future-title_3': 'Кыргызстана',
        'club__mission-title': 'Миссия  нашего клуба',
        'club__mission-text': 'Увеличить количество фермеров и фермерских клубов путем предоставления детям базового обучения фермерству. Члены нашего клуба научаться обрабатывать землю, выращивать животных и экологически чистые продукты и получать возможность забрать урожай домой или продать его через наши фермы.',
        'club__mission-table_1': 'Членство в Клубе будущих фермеров Кыргызстана:',
        'club__mission-table_2': '7000 сом/месяц  (ребенок)',
        'club__mission-table_3': ' Еженедельные субботние встречи',
        'club__mission-table_4': 'Обед в Гайд-парке',
        'club__mission-table_5': 'Класс садоводства',
        'club__mission-table_6': ' Практика английского языка',
        'club__mission-table_7': 'Походы и игры',
        'club__mission-table_8': 'Бесплатные садовые продукты',
        'about': 'О нас',
        'club': 'Клуб фермеров',
        'pasture': 'Цыплята с пастбища',
        'home': 'Главная',
        'contact': 'Контакты',
        'orange-block': 'Откройте для себя питательную ценность цыплят, выращенных на пастбищах, с Renew!',
        'main__text': 'Renew - это коллекция местных ферм в Кыргызстане, увлеченных устойчивыми регенеративными методами ведения сельского хозяйства. Мы фермеры, которые стремятся выращивать самых здоровых и питательных цыплят.',
        'main__button': 'Связаться с нами',
        'social__button': 'Связаться с нами',
        'social__address': 'Кыргызстан, Чуйская область, с.Лесхоз, ул.Гидровская 12/1',
        'apppa': 'Renew Regenerative Farms является членом Американской Ассоциации Производителей Пастбищной Птицы',
        'subscribe__text': 'Оставьте почту, чтобы получать специальные предложения!',
        'subscribe__text__h5': '*Указывает обязательное поле',
        'name': "Имя*",
        "phone": "Телефон*",
        "email": 'Почта*',
        'comment': 'Комментарий',
        "submit_2": "Отправить",
        "submit": "Отправить",
        'chick__box__h3': 'Почему стоит выбрать цыплят, выращенных на пастбищах?',
        'chick__box__p': "Подробный разбор преимуществ",
        'box__1__h4': 'Пищевая ценность',
        'box__1__p': "Мясо наших цыплят, выращенных на пастбищах, является кладезем питательных веществ. Оно содержит более высокие уровни таких важных питательных веществ, как омега-3 жирные кислоты, витамины (например, витамины A, D, E и комплекс витаминов группы B) и минералы (включая селен и железо), по сравнению с цыплятами, выращенными в коммерческих условиях.",
        'box__3__h4': 'Сбалансированные жиры',
        'box__3__p': 'Наши цыплята, выращенные на пастбищах, имеют более здоровую жировую структуру: они содержат меньше вредных насыщенных жиров и больше полезных для сердца мононенасыщенных и полиненасыщенных жиров.',
        'box__2__h4': 'Без вредных химикатов',
        'box__2__p': 'Мы не используем никаких вредных пестицидов, антибиотиков или синтетических гормонов роста, что гарантирует, что ваша пища не содержит химикатов и является здоровой и полезной.',
        'box__4__h4': 'Богаты омега-3',
        'box__4__p': 'Наши цыплята пасутся на свежих пастбищах, что позволяет им накапливать более высокие уровни омега-3 жирных кислот, которые известны своей поддержкой здоровья сердца и снижением воспаления.',
        'chick__box__2': 'Наши цыплята, выращенные на пастбищах, против цыплят, выращенных в коммерческих условиях',
        'vs__box__1__h4': 'Качество жизни',
        'vs__box__1__p': 'Наши цыплята наслаждаются свободной жизнью, имея доступ к свежей траве, насекомым и ежедневным переходам на новые пастбища, что приводит к более счастливым и здоровым птицам.',
        'vs__box__2__h4': 'Свежесть и вкус',
        'vs__box__2__p': 'Разнообразный рацион питания и физические нагрузки, которые получают наши цыплята, делают их мясо не только более питательным, но и более вкусным и сочным.',
        'chick__box__last': 'Поддержите Renew Regenerative Farms, чтобы насладиться преимуществами превосходного в питательном отношении и этично выращенного куриного мяса и внести свой вклад в регенерацию наших драгоценных почв и сообществ. 🇰🇬 Присоединяйтесь к нам, чтобы изменить ситуацию, одну регенеративную ферму за другой!',
        'about__text__h3': 'Познакомьтесь с вашим фермером!',
        'about__text__p': 'Болот - квалифицированный и мотивированный молодой фермер из Кыргызстана, к северу от Бишкека. Мы гордимся сотрудничеством с ним и благодарны таким фермерам, как он, которые являются будущим кыргызского сельского хозяйства. Болот и его семья, а также Джеймс разводили бройлеров в трех мобильных курятниках с использованием методов регенеративного сельского хозяйства. Наши цыплята выращиваются без антибиотиков и гормонов, с использованием только 100% натуральных методов',
        'col__1__p1': 'Джеймс',
        'col__1__p2': 'На протяжении четырех поколений семья Джеймса занималась сельским хозяйством. Джеймс и его жена переехали из США в Кыргызстан в 2016 году. Они благодарны за возможность помочь развитию сельского хозяйства в Кыргызстане!',
        'col__2__p1': 'Цыплятам каждый день давали свежий выпас, и они оставляли после себя ценное удобрение, омолаживая поле Болота.',
        'col__2__p2': 'Renew вручную обрабатывает всех наших бройлеров, давая вам курицу высочайшего качества.',
        'col__3': 'Спасибо за поддержку Renew Regenerative Farms! Наша цель - принести искупление земле и жизням, которых мы касаемся!',
        'contacts__text': 'Спрос на нашу курицу вырос, и мы быстро распродали ее. Если вы хотите заказать куриное мясо из следующей партии, пожалуйста, свяжитесь с нами! И, пожалуйста, дайте нам знать, если у вас есть какие-либо вопросы или вы хотите получить более подробную информацию! Спасибо за ваш интерес!',
        'contacts__form__h2': 'Мы рады, что вы выбираете нас',
        'inform': 'Оставьте контакты, чтобы получить больше информации',
        'club-join': 'Оставьте контакты, чтобы вступить в клуб ',
        'order': 'Оставьте контакты, чтобы обсудить заказ',
        'comment_1': 'Комментарий'
    },
}

 $(function (){
     $('.translate').click(function (){
         var lang = $(this).attr('id');
         saveLocalLang(lang)

         $('.lang').each(function(index, item) {
             $(this).text(arrLang[lang][$(this).attr('key')]);
         })
     })
 })

function saveLocalLang(language) {
    let langs
    if (localStorage.getItem('langs') == null){
        langs = []
    } else {
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.push(language)
    localStorage.setItem('langs', JSON.stringify(langs))
}

function getLocalLang() {
    let langs
    if (localStorage.getItem('langs') == null){
        langs == []
    } else{
        langs = JSON.parse(localStorage.getItem('langs'))
    }
    langs.forEach(function (language) {
        let lang = langs[langs.length - 1]
        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    })
}

//Change language of buttons
 $(function (){
     $('.translate').click(function (){
         var lang = $(this).attr('id') ;
         saveLocalLang(lang)
         var input = document.querySelector(
             'input[name="con__bot"]');

         $('.con__bot').each(function(index, item) {
             input.value=arrLang[lang][$(this).attr('key')];
         })
     })
 })

// BURGER
const menu = document.querySelector('#menu__toggle');
const body = document.body;

function hideMenu() {
  body.classList.toggle('menu__hidden');
}

menu.addEventListener('click', hideMenu);




