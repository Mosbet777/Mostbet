/* =========================================================
   MOSTBET — SCRIPT.JS
   4 dilli sistem + dil aşkarlama + About səhifəsi
   ========================================================= */

const translations = {

az: {
  registerButton: "Qeydiyyat ol",
  aboutBack: "Ana səhifəyə qayıt",

  aboutPageTitle: "Mostbet haqqında",
  aboutPageLead: "Mostbet haqqında əsas məlumatları, bonus imkanlarını və qeydiyyat zamanı istifadə ediləcək promosyon kodunu bu səhifədə tapa bilərsiniz.",

  aboutInfo1Title: "Mostbet",
  aboutInfo1Text: "Mostbet idman mərcləri, canlı matçlar və casino bölmələri ilə bağlı təkliflərin təqdim olunduğu platformadır.",

  aboutInfo2Title: "Bonuslar",
  aboutInfo2Text: "Saytda Mostbet bonusları, xüsusi kampaniyalar və casino təklifləri barədə məlumatlar təqdim olunur.",

  aboutInfo3Title: "Qeydiyyat",
  aboutInfo3Text: "Qeydiyyat zamanı promosyon kodu bölməsində aşağıdakı kodu daxil edə bilərsiniz.",

  aboutInfo4Title: "Məlumat",
  aboutInfo4Text: "Bonus və kampaniyaların şərtlərini istifadə etməzdən əvvəl platformada yoxlamağınız tövsiyə olunur.",

  promoLabel: "Qeydiyyat promosyon kodu",

  mostbetBonusTitle: "🎁 MOSTBET BONUSLARI",
  mostbetBonusIntro: "Mostbet-də yeni və aktiv oyunçular üçün müxtəlif bonus və promo təklifləri mövcuddur. Mövcud bonuslar ölkəyə, kampaniyaya və hesabınıza görə dəyişə bilər.",

  welcomeBonusTitle: "🎯 Xoş Gəlmə Bonusu",
  welcomeBonusText: "Yeni istifadəçilər üçün xüsusi başlanğıc təklifi. Qeydiyyatdan və ilk depozitdən sonra kampaniyanın şərtlərinə uyğun olaraq bonus əldə etmək mümkündür.",

  depositBonusTitle: "💰 Depozit Bonusu",
  depositBonusText: "Hesabınıza depozit etdikdə kampaniyanın şərtlərinə əsasən əlavə bonus məbləği əldə edə bilərsiniz.",

  freeSpinsTitle: "🎰 Free Spins",
  freeSpinsText: "Seçilmiş kazino oyunlarında istifadə etmək üçün pulsuz fırlanmalar təqdim edilə bilər.",

  freeBetTitle: "⚽ Free Bet",
  freeBetText: "İdman mərcləri üçün xüsusi bonus məbləğindən istifadə etmək imkanı.",

  reloadBonusTitle: "🔄 Reload Bonus",
  reloadBonusText: "Mövcud oyunçular üçün növbəti depozitlər zamanı təqdim olunan xüsusi bonuslar.",

  cashbackTitle: "💎 Cashback",
  cashbackText: "Kampaniyanın şərtlərinə uyğun olduqda oyun fəaliyyətindən müəyyən məbləğin geri qaytarılması.",

  vipBonusTitle: "👑 VIP Bonuslar",
  vipBonusText: "Aktiv oyunçular üçün fərdi bonuslar, xüsusi promo təklifləri və digər üstünlüklər təqdim edilə bilər.",

  promoCodesTitle: "🎟️ Promo Kodlar",
  promoCodesText: "Bəzi kampaniyalarda bonus əldə etmək üçün xüsusi promo kod tələb olunur. Promo kodun istifadə qaydası və etibarlılıq müddəti kampaniyaya görə dəyişir.",

  bonusImportantTitle: "⚠️ Vacib",
  bonusImportantText: "Bonusları aktivləşdirməzdən əvvəl kampaniyanın bütün şərtlərini oxuyun.",

  bonusCondition1: "minimum depozit tələbi",
  bonusCondition2: "wagering (mərc dövriyyəsi) şərti",
  bonusCondition3: "bonusun istifadə müddəti",
  bonusCondition4: "maksimum bonus məbləği",
  bonusCondition5: "uyğun oyunlar və mərclər",
  bonusCondition6: "mümkün çıxarış məhdudiyyətləri",

  responsibleText: "18+ | Yalnız qanuni olduğu ölkələrdə istifadə edin | Məsuliyyətli oynayın",

  bonusPageButton: "Mostbet bonuslarına bax →",

  title: "Mostbet | Bonuslar, Xəbərlər və İdman",
  metaDescription: "Mostbet bonusları, xoş gəlmə bonusu, depozit bonusları, Free Spins, Free Bet, Cashback, VIP bonuslar, promo kodlar, idman xəbərləri və xüsusi təkliflər.",

  navBonus: "Bonuslar",
  navNews: "Xəbərlər",
  navLive: "Canlı",
  navAbout: "Haqqımızda",

  headerButton: "Bonuslara bax",

  heroLabel: "MOSTBET XÜSUSİ TƏKLİFLƏR",
  heroTitle: "Ən yaxşı bonusları<br><span>bir yerdə kəşf et</span>",
  heroText: "Mostbet bonusları, xüsusi kampaniyalar, casino təklifləri və ən son idman xəbərləri.",
  heroBonusButton: "Bonusları gör <span>→</span>",
  heroNewsButton: "Son xəbərlər",

  offerLabel: "XÜSUSİ TƏKLİF",
  offerTitle: "Mostbet Bonusları",
  offerText: "Günün ən maraqlı bonus və kampaniyalarını kəşf et.",
  offerButton: "Təkliflərə bax →",

  bonusLabel: "XÜSUSİ TƏKLİFLƏR",
  bonusTitle: "Mostbet Bonusları",
  allButton: "Hamısına bax →",

  catMostbet: "MOSTBET BONUS",
  catCasino: "CASINO",
  catSpecial: "XÜSUSİ FÜRSƏT",
  catSport: "İDMAN",
  catPremium: "PREMIUM",
  catNew: "YENİ",
  catBonus: "BONUS",

  bonus1Title: "%200 Depozit Bonusu",
  bonus1Text: "İlk yatırımınıza xüsusi bonus fürsətini kəşf edin.",
  bonus1Button: "Bonusu gör →",

  bonus2Title: "100 Free Spins",
  bonus2Text: "Seçilmiş casino oyunlarında xüsusi free spin fürsəti.",
  bonus2Button: "Təklifi gör →",

  bonus3Title: "VIP Bonus",
  bonus3Text: "Xüsusi istifadəçilər üçün hazırlanmış təkliflər.",
  bonus3Button: "Ətraflı bax →",

  bonus4Title: "İdman Bonusları",
  bonus4Text: "İdman mərcləri üçün xüsusi kampaniya və təkliflər.",
  bonus4Button: "Təklifi gör →",

  bonus5Title: "Xüsusi Premium Təklif",
  bonus5Text: "Seçilmiş istifadəçilər üçün xüsusi fürsətlər.",
  bonus5Button: "Ətraflı bax →",

  bonus6Title: "Günün Xüsusi Bonusu",
  bonus6Text: "Günün ən maraqlı kampaniyasını indi kəşf edin.",
  bonus6Button: "Bonusu gör →",

  liveLabel: "CANLI",
  liveTitle: "Canlı Matçlar",
  liveStatus: "CANLI",
  league: "UEFA CHAMPIONS LEAGUE",
  liveShort: "LIVE",
  liveStatusText: "● CANLI",
  liveButton: "Matça bax",

  newsLabel: "XƏBƏRLƏR",
  newsTitle: "Son Xəbərlər",
  newsAll: "Bütün xəbərlər →",

  news1Title: "Mostbet yeni bonus kampaniyasını təqdim etdi",
  news1Text: "Ən son kampaniya və xüsusi təkliflər haqqında məlumat əldə edin.",

  news2Title: "Yeni casino bonusları artıq aktivdir",
  news2Text: "Casino dünyasındakı ən son bonus və kampaniyalara nəzər salın.",

  news3Title: "Günün ən vacib idman xəbərləri",
  news3Text: "Futbol və digər idman növlərindən ən son xəbərlər.",

  news4Title: "Həftənin xüsusi bonus təklifləri",
  news4Text: "Bu həftənin seçilmiş bonus və xüsusi fürsətlərini kəşf edin.",

  today: "Bu gün",
  yesterday: "Dünən",
  readNews: "Xəbəri oxu →",

  aboutTitle: "Bonuslar və idman xəbərləri<br>bir yerdə",
  aboutText: "Ən son bonus təkliflərini, casino kampaniyalarını və idman xəbərlərini rahat şəkildə izləyin.",
  aboutButton: "Bonuslara bax →",

  copyright: "© 2026 Mostbet. Bütün hüquqlar qorunur."
},

en: {
  registerButton: "Register",
  aboutBack: "Back to home",

  aboutPageTitle: "About Mostbet",
  aboutPageLead: "Find key information about Mostbet, bonus opportunities and the promo code to use during registration on this page.",

  aboutInfo1Title: "Mostbet",
  aboutInfo1Text: "Mostbet is a platform featuring offers related to sports betting, live matches and casino sections.",

  aboutInfo2Title: "Bonuses",
  aboutInfo2Text: "This site provides information about Mostbet bonuses, special campaigns and casino offers.",

  aboutInfo3Title: "Registration",
  aboutInfo3Text: "Enter the code below in the promo code field during registration.",

  aboutInfo4Title: "Information",
  aboutInfo4Text: "Please check the terms and conditions of bonuses and campaigns on the platform before using them.",

  promoLabel: "Registration promo code",

  mostbetBonusTitle: "🎁 MOSTBET BONUSES",
  mostbetBonusIntro: "Mostbet offers various bonuses and promotional offers for new and active players. Available bonuses may vary depending on your country, campaign and account.",

  welcomeBonusTitle: "🎯 Welcome Bonus",
  welcomeBonusText: "A special starting offer for new users. A bonus may be available after registration and the first deposit according to the campaign terms.",

  depositBonusTitle: "💰 Deposit Bonus",
  depositBonusText: "You may receive an additional bonus amount when making a deposit, subject to the campaign terms.",

  freeSpinsTitle: "🎰 Free Spins",
  freeSpinsText: "Free spins may be offered for use on selected casino games.",

  freeBetTitle: "⚽ Free Bet",
  freeBetText: "An opportunity to use a special bonus amount for sports betting.",

  reloadBonusTitle: "🔄 Reload Bonus",
  reloadBonusText: "Special bonuses offered to existing players on subsequent deposits.",

  cashbackTitle: "💎 Cashback",
  cashbackText: "A certain amount from gaming activity may be returned when campaign conditions are met.",

  vipBonusTitle: "👑 VIP Bonuses",
  vipBonusText: "Individual bonuses, special promotional offers and other benefits may be available for active players.",

  promoCodesTitle: "🎟️ Promo Codes",
  promoCodesText: "Some campaigns require a special promo code to receive a bonus. The usage rules and validity period vary by campaign.",

  bonusImportantTitle: "⚠️ Important",
  bonusImportantText: "Read all campaign terms and conditions before activating bonuses.",

  bonusCondition1: "minimum deposit requirement",
  bonusCondition2: "wagering requirement",
  bonusCondition3: "bonus validity period",
  bonusCondition4: "maximum bonus amount",
  bonusCondition5: "eligible games and bets",
  bonusCondition6: "possible withdrawal restrictions",

  responsibleText: "18+ | Use only where legal | Play responsibly",

  bonusPageButton: "View Mostbet bonuses →",

  title: "Mostbet | Bonuses, News & Sports",
  metaDescription: "Mostbet bonuses, welcome bonus, deposit bonuses, Free Spins, Free Bet, Cashback, VIP bonuses, promo codes, sports news and special offers.",

  navBonus: "Bonuses",
  navNews: "News",
  navLive: "Live",
  navAbout: "About",

  headerButton: "View bonuses",

  heroLabel: "MOSTBET SPECIAL OFFERS",
  heroTitle: "Discover the best bonuses<br><span>all in one place</span>",
  heroText: "Mostbet bonuses, special promotions, casino offers and the latest sports news.",
  heroBonusButton: "View bonuses <span>→</span>",
  heroNewsButton: "Latest news",

  offerLabel: "SPECIAL OFFER",
  offerTitle: "Mostbet Bonuses",
  offerText: "Discover today's most exciting bonuses and promotions.",
  offerButton: "View offers →",

  bonusLabel: "SPECIAL OFFERS",
  bonusTitle: "Mostbet Bonuses",
  allButton: "View all →",

  catMostbet: "MOSTBET BONUS",
  catCasino: "CASINO",
  catSpecial: "SPECIAL OFFER",
  catSport: "SPORTS",
  catPremium: "PREMIUM",
  catNew: "NEW",
  catBonus: "BONUS",

  bonus1Title: "200% Deposit Bonus",
  bonus1Text: "Discover a special bonus opportunity for your first deposit.",
  bonus1Button: "View bonus →",

  bonus2Title: "100 Free Spins",
  bonus2Text: "Special free spin opportunities on selected casino games.",
  bonus2Button: "View offer →",

  bonus3Title: "VIP Bonus",
  bonus3Text: "Exclusive offers prepared for selected users.",
  bonus3Button: "Learn more →",

  bonus4Title: "Sports Bonuses",
  bonus4Text: "Special campaigns and offers for sports betting.",
  bonus4Button: "View offer →",

  bonus5Title: "Special Premium Offer",
  bonus5Text: "Exclusive opportunities for selected users.",
  bonus5Button: "Learn more →",

  bonus6Title: "Special Bonus of the Day",
  bonus6Text: "Discover today's most exciting campaign now.",
  bonus6Button: "View bonus →",

  liveLabel: "LIVE",
  liveTitle: "Live Matches",
  liveStatus: "LIVE",
  league: "UEFA CHAMPIONS LEAGUE",
  liveShort: "LIVE",
  liveStatusText: "● LIVE",
  liveButton: "Watch match",

  newsLabel: "NEWS",
  newsTitle: "Latest News",
  newsAll: "All news →",

  news1Title: "Mostbet launches a new bonus campaign",
  news1Text: "Get the latest information about campaigns and special offers.",

  news2Title: "New casino bonuses are now active",
  news2Text: "Take a look at the latest casino bonuses and promotions.",

  news3Title: "Today's most important sports news",
  news3Text: "The latest news from football and other sports.",

  news4Title: "Special bonus offers of the week",
  news4Text: "Discover this week's selected bonuses and special opportunities.",

  today: "Today",
  yesterday: "Yesterday",
  readNews: "Read news →",

  aboutTitle: "Bonuses and sports news<br>in one place",
  aboutText: "Follow the latest bonus offers, casino promotions and sports news with ease.",
  aboutButton: "View bonuses →",

  copyright: "© 2026 Mostbet. All rights reserved."
},

ru: {
  registerButton: "Зарегистрироваться",
  aboutBack: "Вернуться на главную",

  aboutPageTitle: "О Mostbet",
  aboutPageLead: "На этой странице вы найдете основную информацию о Mostbet, бонусах и промокоде, который можно использовать при регистрации.",

  aboutInfo1Title: "Mostbet",
  aboutInfo1Text: "Mostbet — платформа с предложениями, связанными со спортивными ставками, матчами в прямом эфире и казино.",

  aboutInfo2Title: "Бонусы",
  aboutInfo2Text: "На сайте представлена информация о бонусах Mostbet, специальных акциях и предложениях казино.",

  aboutInfo3Title: "Регистрация",
  aboutInfo3Text: "Введите указанный ниже код в поле промокода при регистрации.",

  aboutInfo4Title: "Информация",
  aboutInfo4Text: "Перед использованием бонусов и акций рекомендуется проверить их условия на платформе.",

  promoLabel: "Промокод для регистрации",

  mostbetBonusTitle: "🎁 БОНУСЫ MOSTBET",
  mostbetBonusIntro: "Mostbet предлагает различные бонусы и промо-предложения для новых и активных игроков. Доступные бонусы могут зависеть от страны, кампании и вашего аккаунта.",

  welcomeBonusTitle: "🎯 Приветственный бонус",
  welcomeBonusText: "Специальное предложение для новых пользователей. После регистрации и первого пополнения можно получить бонус в соответствии с условиями кампании.",

  depositBonusTitle: "💰 Бонус на депозит",
  depositBonusText: "При пополнении счета можно получить дополнительную бонусную сумму в соответствии с условиями кампании.",

  freeSpinsTitle: "🎰 Free Spins",
  freeSpinsText: "Бесплатные вращения могут предоставляться для использования в выбранных играх казино.",

  freeBetTitle: "⚽ Free Bet",
  freeBetText: "Возможность использовать специальную бонусную сумму для спортивных ставок.",

  reloadBonusTitle: "🔄 Reload Bonus",
  reloadBonusText: "Специальные бонусы для действующих игроков при последующих пополнениях.",

  cashbackTitle: "💎 Cashback",
  cashbackText: "При выполнении условий кампании определенная сумма от игровой активности может быть возвращена.",

  vipBonusTitle: "👑 VIP-бонусы",
  vipBonusText: "Для активных игроков могут предоставляться индивидуальные бонусы, специальные промо-предложения и другие преимущества.",

  promoCodesTitle: "🎟️ Промокоды",
  promoCodesText: "Для некоторых кампаний требуется специальный промокод. Правила использования и срок действия зависят от конкретной кампании.",

  bonusImportantTitle: "⚠️ Важно",
  bonusImportantText: "Перед активацией бонусов внимательно ознакомьтесь со всеми условиями кампании.",

  bonusCondition1: "минимальное требование к депозиту",
  bonusCondition2: "условие по вейджеру",
  bonusCondition3: "срок действия бонуса",
  bonusCondition4: "максимальная сумма бонуса",
  bonusCondition5: "подходящие игры и ставки",
  bonusCondition6: "возможные ограничения на вывод",

  responsibleText: "18+ | Используйте только там, где это разрешено законом | Играйте ответственно",

  bonusPageButton: "Смотреть бонусы Mostbet →",

  title: "Mostbet | Бонусы, Новости и Спорт",
  metaDescription: "Бонусы Mostbet, приветственный бонус, бонусы на депозит, Free Spins, Free Bet, Cashback, VIP-бонусы, промокоды, спортивные новости и специальные предложения.",

  navBonus: "Бонусы",
  navNews: "Новости",
  navLive: "Live",
  navAbout: "О нас",

  headerButton: "Смотреть бонусы",

  heroLabel: "СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ MOSTBET",
  heroTitle: "Открой лучшие бонусы<br><span>в одном месте</span>",
  heroText: "Бонусы Mostbet, специальные акции, предложения казино и последние спортивные новости.",
  heroBonusButton: "Смотреть бонусы <span>→</span>",
  heroNewsButton: "Последние новости",

  offerLabel: "СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ",
  offerTitle: "Бонусы Mostbet",
  offerText: "Откройте самые интересные бонусы и акции дня.",
  offerButton: "Смотреть предложения →",

  bonusLabel: "СПЕЦИАЛЬНЫЕ ПРЕДЛОЖЕНИЯ",
  bonusTitle: "Бонусы Mostbet",
  allButton: "Смотреть все →",

  catMostbet: "БОНУС MOSTBET",
  catCasino: "КАЗИНО",
  catSpecial: "СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ",
  catSport: "СПОРТ",
  catPremium: "ПРЕМИУМ",
  catNew: "НОВОЕ",
  catBonus: "БОНУС",

  bonus1Title: "Бонус 200% на депозит",
  bonus1Text: "Откройте специальное бонусное предложение для первого пополнения.",
  bonus1Button: "Смотреть бонус →",

  bonus2Title: "100 бесплатных вращений",
  bonus2Text: "Специальные бесплатные вращения в выбранных играх казино.",
  bonus2Button: "Смотреть предложение →",

  bonus3Title: "VIP-бонус",
  bonus3Text: "Эксклюзивные предложения для избранных пользователей.",
  bonus3Button: "Подробнее →",

  bonus4Title: "Спортивные бонусы",
  bonus4Text: "Специальные акции и предложения для спортивных ставок.",
  bonus4Button: "Смотреть предложение →",

  bonus5Title: "Специальное премиум-предложение",
  bonus5Text: "Эксклюзивные возможности для избранных пользователей.",
  bonus5Button: "Подробнее →",

  bonus6Title: "Специальный бонус дня",
  bonus6Text: "Откройте самое интересное предложение дня прямо сейчас.",
  bonus6Button: "Смотреть бонус →",

  liveLabel: "LIVE",
  liveTitle: "Матчи в прямом эфире",
  liveStatus: "LIVE",
  league: "ЛИГА ЧЕМПИОНОВ УЕФА",
  liveShort: "LIVE",
  liveStatusText: "● LIVE",
  liveButton: "Смотреть матч",

  newsLabel: "НОВОСТИ",
  newsTitle: "Последние новости",
  newsAll: "Все новости →",

  news1Title: "Mostbet представил новую бонусную кампанию",
  news1Text: "Получите информацию о последних кампаниях и специальных предложениях.",

  news2Title: "Новые бонусы казино уже активны",
  news2Text: "Ознакомьтесь с последними бонусами и акциями казино.",

  news3Title: "Главные спортивные новости дня",
  news3Text: "Последние новости футбола и других видов спорта.",

  news4Title: "Специальные бонусные предложения недели",
  news4Text: "Откройте избранные бонусы и специальные возможности этой недели.",

  today: "Сегодня",
  yesterday: "Вчера",
  readNews: "Читать новости →",

  aboutTitle: "Бонусы и спортивные новости<br>в одном месте",
  aboutText: "Следите за последними бонусными предложениями, акциями казино и спортивными новостями.",
  aboutButton: "Смотреть бонусы →",

  copyright: "© 2026 Mostbet. Все права защищены."
},

tr: {
  registerButton: "Kayıt ol",
  aboutBack: "Ana sayfaya dön",

  aboutPageTitle: "Mostbet Hakkında",
  aboutPageLead: "Bu sayfada Mostbet hakkında temel bilgileri, bonus fırsatlarını ve kayıt sırasında kullanabileceğiniz promosyon kodunu bulabilirsiniz.",

  aboutInfo1Title: "Mostbet",
  aboutInfo1Text: "Mostbet; spor bahisleri, canlı maçlar ve casino bölümleriyle ilgili teklifler sunan bir platformdur.",

  aboutInfo2Title: "Bonuslar",
  aboutInfo2Text: "Bu sitede Mostbet bonusları, özel kampanyalar ve casino teklifleri hakkında bilgiler yer alır.",

  aboutInfo3Title: "Kayıt",
  aboutInfo3Text: "Kayıt sırasında promosyon kodu alanına aşağıdaki kodu girebilirsiniz.",

  aboutInfo4Title: "Bilgi",
  aboutInfo4Text: "Bonus ve kampanyaları kullanmadan önce platformdaki şartları kontrol etmeniz önerilir.",

  promoLabel: "Kayıt promosyon kodu",

  mostbetBonusTitle: "🎁 MOSTBET BONUSLARI",
  mostbetBonusIntro: "Mostbet'te yeni ve aktif oyuncular için çeşitli bonus ve promosyon teklifleri bulunmaktadır. Mevcut bonuslar ülkeye, kampanyaya ve hesabınıza göre değişebilir.",

  welcomeBonusTitle: "🎯 Hoş Geldin Bonusu",
  welcomeBonusText: "Yeni kullanıcılar için özel başlangıç teklifi. Kayıt ve ilk yatırım sonrasında kampanya şartlarına uygun olarak bonus alınabilir.",

  depositBonusTitle: "💰 Yatırım Bonusu",
  depositBonusText: "Hesabınıza yatırım yaptığınızda kampanya şartlarına bağlı olarak ek bonus miktarı alabilirsiniz.",

  freeSpinsTitle: "🎰 Free Spins",
  freeSpinsText: "Seçili casino oyunlarında kullanılmak üzere ücretsiz dönüşler sunulabilir.",

  freeBetTitle: "⚽ Free Bet",
  freeBetText: "Spor bahislerinde özel bonus miktarını kullanma imkanı.",

  reloadBonusTitle: "🔄 Reload Bonus",
  reloadBonusText: "Mevcut oyunculara sonraki yatırımlar sırasında sunulan özel bonuslar.",

  cashbackTitle: "💎 Cashback",
  cashbackText: "Kampanya şartları karşılandığında oyun faaliyetlerinden belirli bir miktar geri ödenebilir.",

  vipBonusTitle: "👑 VIP Bonuslar",
  vipBonusText: "Aktif oyuncular için kişisel bonuslar, özel promosyon teklifleri ve diğer avantajlar sunulabilir.",

  promoCodesTitle: "🎟️ Promosyon Kodları",
  promoCodesText: "Bazı kampanyalarda bonus almak için özel bir promosyon kodu gerekir. Kodun kullanım şartları ve geçerlilik süresi kampanyaya göre değişir.",

  bonusImportantTitle: "⚠️ Önemli",
  bonusImportantText: "Bonusları etkinleştirmeden önce kampanyanın tüm şartlarını okuyun.",

  bonusCondition1: "minimum yatırım şartı",
  bonusCondition2: "wagering (bahis çevirme) şartı",
  bonusCondition3: "bonus kullanım süresi",
  bonusCondition4: "maksimum bonus miktarı",
  bonusCondition5: "uygun oyunlar ve bahisler",
  bonusCondition6: "olası çekim kısıtlamaları",

  responsibleText: "18+ | Yalnızca yasal olduğu ülkelerde kullanın | Sorumlu oynayın",

  bonusPageButton: "Mostbet bonuslarına bak →",

  title: "Mostbet | Bonuslar, Haberler ve Spor",
  metaDescription: "Mostbet bonusları, hoş geldin bonusu, yatırım bonusları, Free Spins, Free Bet, Cashback, VIP bonuslar, promosyon kodları, spor haberleri ve özel teklifler.",

  navBonus: "Bonuslar",
  navNews: "Haberler",
  navLive: "Canlı",
  navAbout: "Hakkımızda",

  headerButton: "Bonuslara bak",

  heroLabel: "MOSTBET ÖZEL TEKLİFLER",
  heroTitle: "En iyi bonusları<br><span>tek yerde keşfet</span>",
  heroText: "Mostbet bonusları, özel kampanyalar, casino teklifleri ve son spor haberleri.",
  heroBonusButton: "Bonusları gör <span>→</span>",
  heroNewsButton: "Son haberler",

  offerLabel: "ÖZEL TEKLİF",
  offerTitle: "Mostbet Bonusları",
  offerText: "Bugünün en ilgi çekici bonuslarını ve kampanyalarını keşfedin.",
  offerButton: "Tekliflere bak →",

  bonusLabel: "ÖZEL TEKLİFLER",
  bonusTitle: "Mostbet Bonusları",
  allButton: "Tümüne bak →",

  catMostbet: "MOSTBET BONUS",
  catCasino: "CASINO",
  catSpecial: "ÖZEL FIRSAT",
  catSport: "SPOR",
  catPremium: "PREMİUM",
  catNew: "YENİ",
  catBonus: "BONUS",

  bonus1Title: "%200 Yatırım Bonusu",
  bonus1Text: "İlk yatırımınız için özel bonus fırsatını keşfedin.",
  bonus1Button: "Bonusu gör →",

  bonus2Title: "100 Free Spins",
  bonus2Text: "Seçili casino oyunlarında özel free spin fırsatları.",
  bonus2Button: "Teklifi gör →",

  bonus3Title: "VIP Bonus",
  bonus3Text: "Seçili kullanıcılar için hazırlanmış özel teklifler.",
  bonus3Button: "Detaylı bak →",

  bonus4Title: "Spor Bonusları",
  bonus4Text: "Spor bahisleri için özel kampanyalar ve teklifler.",
  bonus4Button: "Teklifi gör →",

  bonus5Title: "Özel Premium Teklif",
  bonus5Text: "Seçili kullanıcılar için özel fırsatlar.",
  bonus5Button: "Detaylı bak →",

  bonus6Title: "Günün Özel Bonusu",
  bonus6Text: "Bugünün en ilgi çekici kampanyasını şimdi keşfedin.",
  bonus6Button: "Bonusu gör →",

  liveLabel: "CANLI",
  liveTitle: "Canlı Maçlar",
  liveStatus: "CANLI",
  league: "UEFA ŞAMPİYONLAR LİGİ",
  liveShort: "CANLI",
  liveStatusText: "● CANLI",
  liveButton: "Maçı izle",

  newsLabel: "HABERLER",
  newsTitle: "Son Haberler",
  newsAll: "Tüm haberler →",

  news1Title: "Mostbet yeni bonus kampanyasını duyurdu",
  news1Text: "En son kampanyalar ve özel teklifler hakkında bilgi alın.",

  news2Title: "Yeni casino bonusları artık aktif",
  news2Text: "En yeni casino bonuslarına ve kampanyalarına göz atın.",

  news3Title: "Günün en önemli spor haberleri",
  news3Text: "Futbol ve diğer sporlardan son haberler.",

  news4Title: "Haftanın özel bonus teklifleri",
  news4Text: "Bu haftanın seçili bonuslarını ve özel fırsatlarını keşfedin.",

  today: "Bugün",
  yesterday: "Dün",
  readNews: "Haberi oku →",

  aboutTitle: "Bonuslar ve spor haberleri<br>tek yerde",
  aboutText: "En son bonus tekliflerini, casino kampanyalarını ve spor haberlerini kolayca takip edin.",
  aboutButton: "Bonuslara bak →",

  copyright: "© 2026 Mostbet. Tüm hakları saklıdır."
}

};

/* ========================= LANGUAGE ========================= */

function setLanguage(lang, save = false) {

  if (!translations[lang]) lang = "en";

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.title = translations[lang].title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.content = translations[lang].metaDescription;
  }

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.value = lang;
  }

  if (save) {
    localStorage.setItem("preferredLanguage", lang);
  }
}

/* ========================= ELEMENTS ========================= */

const languageSelect = document.getElementById("languageSelect");
const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");

/* ========================= LANGUAGE SELECT ========================= */

if (languageSelect) {
  languageSelect.addEventListener("change", function () {
    setLanguage(this.value, true);
  });
}

/* ========================= MOBILE MENU ========================= */

if (mobileMenu && nav) {

  mobileMenu.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
    });
  });

}

/* ========================= ABOUT PAGE ========================= */

function showAboutPage() {
  document.querySelector("main").style.display = "none";
  document.querySelector(".about-page").classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHomePage() {
  document.querySelector(".about-page").classList.remove("active");
  document.querySelector("main").style.display = "";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ========================= ABOUT LINKS ========================= */

document.querySelectorAll(".about-nav-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    showAboutPage();
    if (nav) {
      nav.classList.remove("active");
    }
    history.replaceState(null, "", "#haqqimizda");
  });
});

/* ========================= BACK ========================= */

const aboutBack = document.getElementById("aboutBack");
if (aboutBack) {
  aboutBack.addEventListener("click", function (e) {
    e.preventDefault();
    showHomePage();
    history.replaceState(null, "", "#home");
  });
}

/* ========================= HASH ========================= */

if (location.hash === "#haqqimizda") {
  showAboutPage();
}

/* ========================= COUNTRY / DEFAULT LANGUAGE =========================
   IP COUNTRY -> LANGUAGE
   AZ -> AZ, TR -> TR, RU -> RU, everything else -> EN.
   Manual selection is remembered in localStorage.
   ============================================================================ */

async function detectDefaultLanguage() {

  const savedLanguage = localStorage.getItem("preferredLanguage");

  if (savedLanguage && translations[savedLanguage]) {
    setLanguage(savedLanguage, false);
    return;
  }

  let country = "";

  try {
    const response = await fetch("https://ipapi.co/json/", {
      method: "GET",
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      const data = await response.json();
      country = String(data.country_code || "").toUpperCase();
    }
  } catch (error) {
    console.warn("IP country detection failed:", error);
  }

  let fallback = "en";

  if (country === "AZ") {
    fallback = "az";
  } else if (country === "TR") {
    fallback = "tr";
  } else if (country === "RU") {
    fallback = "ru";
  }

  setLanguage(fallback, false);
}

detectDefaultLanguage();
