<script setup>

import Navbar from './Navbar/Navbar.vue';
import Logo from "@/components/Logo/Logo.vue";
import Button from "@/components/Button/Button.vue";
import Search from "@/layouts/Header/Search/Search.vue";

</script>

<template>
  <header>
    <div class="header__wrapper wrapper">
      <div class="header__top">
        <div class="header__top-location">
          <div><img src="/icons/location-icon.svg" alt="map point"></div>
          <span>Москва</span>
        </div>
        <div class="header__top-info-wrapper">
          <div class="header__top-contact-us">
            <div class="header__top-contact-us__icons">
              <img height="20" width="20" src="/icons/viber-icon.svg" alt="viber logo">
              <img height="20" width="20" src="/icons/telegram-icon.svg" alt="telegram logo">
            </div>
            <span>+7(495)150-95-55</span>
          </div>
          <div class="header__top-cabinet">
            <div class="flex flex-center"><img src="/icons/cabinet-icon.svg" alt="cabinet"></div>
            <span>Личный кабинет</span>
          </div>
        </div>
      </div>

      <div class="header__bottom flex items-center">
        <Logo />
        <Button text="Все категории" classnames="button--lg"/>
        <Navbar />
        <Search />
      </div>
    </div>
  </header>
</template>

<style scoped>
  .header__wrapper {
    display: flex;
    flex-direction: column;
  }

  .header__top {
    padding-block: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__top-location {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .header__top-contact-us {
    display: flex;
    gap: 14px;
  }

  .header__top-contact-us__icons {
    display: flex;
    gap: 12px;
  }

  .header__top-cabinet {
    display: flex;
    gap: 8px;
  }

  .header__top-info-wrapper {
    display: flex;
    gap: 65px;
  }
</style>