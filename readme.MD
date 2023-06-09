# Компоненты для спецпроектов ЯПокупаю

Этот репозиторий содержит готовые к использованию HTML-компоненты, CSS-стили и JS-скрипты для создания специальных проектов на платформе ЯПокупаю. Компоненты предназначены для двух типов проектов: Супер-гид и Бьюти-гид.
## 📦 Полезные ссылки

 - [Пример Супер-гида](https://www.yapokupayu.ru/guide/superguide-ekb)
 - [Пример Бьюти-гида](https://www.yapokupayu.ru/guide/beautyguide-ekb)
 - [Макеты](https://www.figma.com/file/ZSmi1cVDFPDQ4YBVLmjNy1/%D0%9C%D0%BE%D0%B8-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B?node-id=2849-115&t=GkbdH9I20uELAUwJ-0)


## 🚀 Для работы компонентов необходимо:

- Подключить необходимые CSS и JS библиотеки
- Подключить соответствующие проекту CSS-стили в тег <style>
- Подключить соответствующие проекту JS-скрипты
- Скопировать html-разметку компонента в Источник CKEditor


## 📁 Структура

Все необходимые html-компоненты находятся в папках

```bash
  dist/components/landing-page/ - Компоненты Супер-гида
  dist/components/beauty-guide/ - Компоненты Бьюти-гида
```

Необходимый CSS для проектов находится в папке 
```bash
  dist/css/landing-page.min.css - Для Супер-гида
  dist/css/beauty-guide.min.css - Для Бьюти-гида
```

Необходимый JS для проектов находится в папке 
```bash
  dist/css/landing-page.min.js - Для Супер-гида
  dist/css/beauty-guide.min.js - Для Бьюти-гида
```

## 📚 Необходимые javascript библиотетки для Бьюти-гида

```html
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
<script src="https://kit.fontawesome.com/b642567569.js" crossorigin="anonymous"></script>
```

## 📚 Необходимые javascript библиотетки для Супер-гида

```html
<script src="https://kit.fontawesome.com/b642567569.js" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>
<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
```