<script setup>
import Logo from "@/components/Logo/Logo.vue";

const FOOTER_LINKS1 = [
  {id: 1, title: 'Как оформить заказ'},
  {id: 2, title: 'Доставка'},
  {id: 3, title: 'Оплата'},
  {id: 4, title: 'Прием товара'},
  {id: 5, title: 'Почему покупать у нас'},
  {id: 6, title: 'Подключение техники'},
  {id: 7, title: 'Отзывы о нас'},
  {id: 8, title: 'Пользовательское соглашение'},
]

const FOOTER_LINKS2 = [
  {id: 1, title: 'Контакты'},
  {id: 2, title: 'О компании'},
  {id: 3, title: 'Юридическая информация'},
  {id: 4, title: 'Для поставщиков'},
  {id: 5, title: 'Для оптовых клиентов'},
  {id: 6, title: 'Оставить обращение'},
  {id: 7, title: 'Политика конфиденциальности'},
  {id: 8, title: 'Новости и обзоры'},
]

const FOOTER_LINKS3 = [
  {id: 1, title: 'Вопрос-ответ'},
  {id: 2, title: 'Дополнительный сервис'},
  {id: 3, title: 'Проверка на битые пиксели'},
  {id: 4, title: 'Утилизация техники'},
  {id: 5, title: 'Гарантийное обслуживание'},
  {id: 6, title: 'Сервисные центры'},
  {id: 7, title: 'Наши гарантии'},
  {id: 8, title: 'Обмен и возврат товара'},
]
</script>

<template>
  <footer>
    <div class="footer__wrapper wrapper">
      <div class="footer__wrapper-top">
        <div class="footer__info">
          <Logo />
          <p class="fs-24 fw-500">+7(495)150-95-55</p>
          <div class="footer__info-socials">
            <a href="#"><img height="27" width="27" src="/icons/telegram-icon.svg" alt="telegram logo"></a>
            <a href="#"><img height="27" width="27" src="/icons/vk-icon.svg" alt="vk logo"></a>
            <a href="#"><img height="27" width="27" src="/icons/viber-icon.svg" alt="viber logo"></a>
            <a href="#"><img height="27" width="27" src="/icons/ok-icon.svg" alt="ok logo"></a>
          </div>
          <p>ООО "БТ МАРКЕТ", ИНН7728483067 <br> Москва, пр-д Соловьиный д. 2, ком. 1</p>
        </div>

        <div class="footer__links flex justify-between">
          <ul>
            <li v-for="link in FOOTER_LINKS1" :key="link.id">{{link.title}}</li>
          </ul>
          <ul>
            <li v-for="link in FOOTER_LINKS2" :key="link.id">{{link.title}}</li>
          </ul>
          <ul>
            <li v-for="link in FOOTER_LINKS3" :key="link.id">{{link.title}}</li>
          </ul>
        </div>
      </div>
      <div class="footer__wrapper-bottom">
        <p >
          Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях информационные материалы и цены, размещенные на
          <br> сайте, не являются публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ. <br>
          elecity.ru © 2011-2021
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer__links {
    ul {
      list-style: none;
    }
  }

  .footer__wrapper-top {
    display: flex;
    justify-content: space-between;
    padding-block: 8px 20px;
    border-block: 1px solid #E5E5E5;
  }

  .footer__info-socials {
    margin-block: 16px 32px;
    display: flex;
    gap: 14px;

    > a {
      filter: grayscale(1);
    }
  }

  .footer__wrapper-bottom {
    padding-block: 16px;
    > p {
      font-size: 12px;
      text-align: center;
    }
  }
</style>