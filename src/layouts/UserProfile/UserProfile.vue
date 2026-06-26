<script setup>
import { ref } from "vue";
import ButtonLg from "@/components/Button/ButtonLg.vue";

const ICONS_DATA = ref([
  {
    id: 1,
    title: 'Мои заказы',
    iconSrc: '/icons/user-profile/sent.svg'
  },
  {
    id: 2,
    title: 'Отложенные товары',
    iconSrc: '/icons/user-profile/love.svg'
  },
  {
    id: 3,
    title: 'Мои сравнения',
    iconSrc: '/icons/user-profile/group.svg'
  },
  {
    id: 4,
    title: 'Мои отзывы',
    iconSrc: '/icons/user-profile/chat.svg'
  },
  {
    id: 5,
    title: 'Профиль',
    iconSrc: '/icons/user-profile/user-icon.svg'
  }
])
</script>

<template>
  <div>
    <div class="breadcrumbs">
      <span>Главная</span><span>/</span><span>Личный кабинет</span>
    </div>

  <section class="user-profile-section">
    <div class="about-tech__icons-list flex justify-between">
      <div class="about-tech__icons-list-item" v-for="icon in ICONS_DATA" :key="icon.id">
        <img width="25" height="25" :src="icon.iconSrc" :alt="icon.title">
        <p>{{icon.title}}</p>
      </div>
    </div>

   <h2 class="user-profile__title">Мой профиль</h2>
    <div class="user-bio flex items-center gap-16">
      <div class="user-avatar">
        <img src="/icons/user-profile/user-avatar-icon.svg" alt="user avatar">
      </div>
      <div class="user-avatar-info">
        <p class="fs-24 fw-600">Парфенов Андрей</p>
        <p class="flex items-center gap-8"><span><img src="/icons/user-profile/pencil.svg" alt="change"></span>Загрузить фото</p>
      </div>
    </div>

    <div class="flex justify-between">
      <div>
      <h2 class="user-profile__title user-data__title">Учетные данные</h2>
        <div class="user-data-grid">
        <div class="user-data__card">
          <h3>ФИО</h3>
          <p>Парфенов Андрей Витальевич</p>
          <p class="flex items-center gap-8"><span><img src="/icons/user-profile/pencil.svg" alt="change"></span>Редактировать</p>
        </div>
        <div class="user-data__card">
          <h3>Адрес</h3>
          <p>г. Москва, ул. Набережная 42-77</p>
          <p class="flex items-center gap-8"><span><img src="/icons/user-profile/pencil.svg" alt="change"></span>Редактировать</p>
        </div>
        <div class="user-data__card">
          <h3>Email</h3>
          <p>parfenov@gmail.com</p>
          <p class="flex items-center gap-8"><span><img src="/icons/user-profile/pencil.svg" alt="change"></span>Редактировать</p>
        </div>
        <div class="user-data__card">
          <h3>Телефон</h3>
          <p>+795 25 356 25 87</p>
          <p class="flex items-center gap-8"><span><img src="/icons/user-profile/pencil.svg" alt="change"></span>Редактировать</p>
        </div>
      </div>
      </div>

      <div class="user-data__tel">
        <h2 class="user-profile__title user-data__title">Изменить старый номер телефона</h2>
        <div class="user-number__input">
          <span>Введите старый номер телефона</span>
          <input type="tel" name="tel_old" id="tel_old">
        </div>
        <div class="user-number__input">
          <span>Введите новый номер телефона</span>
          <input type="tel" name="tel_new" id="tel_new">
        </div>
        <div class="flex flex-center">
          <ButtonLg text="Сохранить" />
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
.breadcrumbs {
  margin-top: 16px;
  display: flex;
  gap: 4px;

  span:last-child {
    font-weight: 500;
  }
}

.user-profile-section {
  margin-block: 16px 86px;
}

.user-data__tel {
  display: flex;
  flex-direction: column;
  gap: 12px;

  button {
    margin-top: 25px;
    width: 50%;
  }
}

.user-number__input {
  display: flex;
  flex-direction: column;

  > input {
    margin-top: 4px;
    border: 1px solid #c4c4c4;
    height: 45px;
    width: 100%;
    border-radius: 5px;
  }

  > span {
    font-size: 14px;
    color: var(--text-second);
  }
}

p:has(span > img) {
  font-weight: 500;
  color: var(--accent);
  cursor: pointer;
}

.user-profile__title {
  font-weight: 400;
  font-size: 30px;
}

.user-data__title {
  margin-bottom: 16px;
  font-size: 24px;
}

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EFF3F9;
  border-radius: 50%;
  height: 108px;
  width: 108px;
}

.user-data-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 160px;
  row-gap: 18px;
}

.user-data__card {
  font-size: 14px;
  > h3 {
    font-weight: 400;
    margin: 0;
    color: var(--text-second);
  }

  > p {
    font-size: 18px;
  }
}

.about-tech__icons-list {
  margin-block: 30px;
  > .about-tech__icons-list-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 500;

    &:last-child {
      color: #FC413C;
    }
  }
}
</style>