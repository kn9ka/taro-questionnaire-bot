import { Telegraf, Markup } from "telegraf";
import { Context } from "telegraf";
import * as dotenv from "dotenv";
dotenv.config();

interface MyContext extends Context {}

const bot = new Telegraf<MyContext>(process.env.BOT_TOKEN!);

bot.start((ctx) => {
  ctx
    .reply(
      "Нужна помощь? Нажмите на кнопку, чтобы связаться со мной.",
      Markup.inlineKeyboard([
        Markup.button.url("Связаться", "https://t.me/Glubina_Taro"),
      ])
    )
    .then((message) => {
      ctx.pinChatMessage(message?.message_id!);
    });

  ctx.reply(
    [
      "Приветствую! 🌟",
      "",
      "Меня зовут Таро помощник, и я помогу вам углубиться в мир Таро. ",
      "Я представляю методику Лепёшкиной Анастасии, мастера с 9-летним опытом работы с таро и создателя уникальной авторской системы работы с картами.",
      "",
      "💡 Если вы хотите изучать Таро легко и структурировано, начните с бесплатного гайда «Минусы придворных арканов Таро». Хотите забрать?",
      "",
      "👉 Кстати, больше полезной информации о Таро, ежедневные советы и вдохновение вы найдете в соцсетях Анастасии:",
      "• Instagram: https://www.instagram.com/glubina_taro/",
      "• Telegram: https://t.me/Glubina_Taro",
      "• ВКонтакте: https://vk.com/glubina_taro",
      "• Дзен: https://dzen.ru/glubina_taro",
    ].join("\n"),

    Markup.inlineKeyboard([
      Markup.button.callback("Да, хочу гайд", "wants_guide"),
      Markup.button.callback("Что за гайд?", "guide_info"),
      Markup.button.callback("Нет", "decline_guide"),
    ])
  );
});

bot.action("decline_guide", (ctx) => {
  ctx.reply(
    [
      " Понял вас! Если хотите узнать что-то конкретное, напишите свой вопрос, и я постараюсь вам помочь. @Glubina_Taro",
    ].join("\n")
  );
});

bot.action("wants_guide", (ctx) => {
  ctx.reply(
    [
      "Отлично! Вот ссылка на бесплатный гайд 👉 https://disk.yandex.com/i/zG6HYEKzMsuxUQ",
      "",
      "🎁 Прочитайте, и если у вас останутся вопросы, возвращайтесь ко мне.",
      "",
      "💡 Кстати, если вы хотите полностью разобраться в том, как придворные арканы влияют на разные сферы жизни (деньги, отношения, карьеру),",
      "я приглашаю вас на вебинар «Придворные арканы Таро в сферах жизни»!",
      "",
      "⏰ Длительность: 4,5 часа",
      "💵 Цена: всего 1490 рублей.",
    ].join("\n"),

    Markup.inlineKeyboard([
      Markup.button.callback("Хочу на вебинар", "wants_webinar"),
      Markup.button.callback("Что за вебинар?", "webinar_info"),
      Markup.button.callback("Нет", "decline_guide"),
    ])
  );
});

bot.action("webinar_info", (ctx) => {
  ctx.reply(
    [
      "На вебинаре вы откроете для себя, как характеры придворных арканов проявляются в различных аспектах жизни и взаимодействуют друг с другом.",
      "Вы научитесь видеть их сильные и слабые стороны в конкретных ситуациях,",
      "а также сможете с помощью одних только придворных арканов идентифицировать свой характер и особенности окружающих вас людей.",
      "",
      "Это знание поможет вам выстраивать максимально гармоничные и выгодные для себя коммуникации,избегая конфликтов и усиливая взаимопонимание.",
    ].join("\n")
  );
});

bot.action("guide_info", (ctx) => {
  ctx.reply(
    [
      "Этот гайд поможет вам понять основные слабости придворных арканов и научиться работать с их энергиями даже в сложных раскладах.",
    ].join("\n")
  );
});

bot.action("wants_webinar", (ctx) => {
  ctx.reply(
    [
      "Отличный выбор! Вот ссылка для регистрации на вебинар 👉 https://glubina-taro.skillspace.ru/l/vebinar-pridvornye",
      "",
      "💳 После оплаты вы получите доступ и список материалов.",
      "",
      "🌟 А еще у меня есть крутой гайд «Чувства в Таро», который поможет вам глубже понять,",
      "какие эмоции скрыты за каждым арканом.",
      "💵 Цена гайда — всего 990 рублей. Хотите забрать?",
    ].join("\n"),

    Markup.inlineKeyboard([
      Markup.button.callback("Да, хочу гайд", "wants_advanced_guide"),
      Markup.button.callback("Нет, только вебинар", "decline_advanced_guide"),
    ])
  );
});

// Обработка ответа "Да, хочу гайд"
bot.action("wants_advanced_guide", (ctx) => {
  ctx.reply(
    [
      "Отлично! Вот ссылка для покупки гайда 👉 https://wedeeplight.payform.ru/?invoice_id=e848549cc859150efd8856fe049bc460&paylink=1",
      "",
      "Этот гайд предоставит вам уникальные методы работы с энергиями арканов.",
      "Вы научитесь понимать эмоциональные аспекты карт и раскрывать скрытые чувства.",
      "",
      "После оплаты вы получите PDF с подробными описаниями чувств и эмоций каждого аркана.",
      "",
      "🌟 Вы уже задумывались о глубоком обучении Таро? ",
      "Я приглашаю вас на мой основной курс «Глубинный свет Таро, ступень 1».",
      "",
      "📚 Что в курсе:",
      "• Введение в систему Таро.",
      "• Младшие, старшие и придворные арканы.",
      "• Практика на реальных раскладах.",
      "",
      "💵 Цена курса: 25 000 рублей. Хотите узнать подробности?",
    ].join("\n"),
    Markup.inlineKeyboard([
      Markup.button.callback("Да, расскажите подробнее", "wants_course_info"),
      Markup.button.callback("Нет", "decline_course"),
    ])
  );
});

bot.action("decline_course", (ctx) => {
  ctx.reply(
    [
      "Понял вас! Курс доступен в любое время. Если захотите изучать Таро глубже, вы всегда можете вернуться к этому предложению.",
      "",
      "Если у вас остались вопросы, пишите. Я всегда на связи!",
      "",
      'Кстати, у нас также есть уникальные товары для практики — нажмите "Хочу товары", чтобы узнать подробнее!',
    ].join("\n"),
    Markup.inlineKeyboard([
      Markup.button.callback("Хочу товары", "wants_products"),
    ])
  );
});

bot.action("wants_products", (ctx) => {
  ctx.reply(
    [
      "Вот товары, которые могут вас заинтересовать:",
      "",
      "🌈 Авторская колода Rainbow Tarot — 3500 рублей.",
      "🕯 Набор программных свечей «Желание» — 1500 рублей.",
      "",
      "Выберите товар, чтобы получить ссылку для покупки.",
    ].join("\n"),
    Markup.inlineKeyboard([
      Markup.button.callback("Хочу колоду", "wants_deck"),
      Markup.button.callback("Хочу свечи", "wants_candles"),
      Markup.button.callback("Ничего не нужно", "decline_extras"),
    ])
  );
});

bot.action("decline_advanced_guide", (ctx) => {
  ctx.reply(
    [
      "Понял вас! Если после вебинара у вас останутся вопросы,",
      "вы всегда можете вернуться за этим гайдом. Удачи и вдохновения в изучении Таро!",
    ].join("\n")
  );
});

bot.action("wants_course_info", (ctx) => {
  ctx.reply(
    [
      "Это курс, который поможет вам стать уверенным мастером Таро.",
      "Вы будете понимать карты не только в раскладах, но и в энергетических процессах.",
      "",
      "Вот ссылка для записи 👉 [вставить ссылку].",
      "",
      "🎁 А еще у меня есть уникальная авторская колода Rainbow Tarot за 3500 рублей",
      "и набор программных свечей «Желание» за 1500 рублей.",
    ].join("\n"),

    Markup.inlineKeyboard([
      Markup.button.callback("Хочу колоду", "wants_deck"),
      Markup.button.callback("Хочу свечи", "wants_candles"),
      Markup.button.callback("Нет, ничего не нужно", "decline_extras"),
    ])
  );
});

bot.action("wants_deck", (ctx) => {
  ctx.reply(
    "Отлично! Вот ссылка для покупки колоды Rainbow Tarot 👉 [вставить ссылку]."
  );
});

bot.action("wants_candles", (ctx) => {
  ctx.reply(
    "Отлично! Вот ссылка для покупки набора свечей «Желание» 👉 [вставить ссылку]."
  );
});

bot.action("decline_extras", (ctx) => {
  ctx.reply(
    [
      "Спасибо, что обратились ко мне! 🌟 Напоминаю:",
      "• Бесплатный гайд у вас уже есть.",
      "• Не забудьте зарегистрироваться на вебинар и изучить платные гайды, чтобы углубить свои знания.",
      "",
      "Удачи в практике Таро, и до скорой встречи на курсе «Глубинный свет Таро, Ступень 1»! 💫",
    ].join("\n")
  );
});

// Запуск бота
bot.launch();

// Обработка остановки бота
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
