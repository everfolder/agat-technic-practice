<script setup>

import Modal from '../Modal.vue';

</script>

<template>
    <div class="container">
        <h2>Сервисные услуги</h2>
        <div class="service">
            <div class="service__service">
                <div class="service__service-title">
                    Запись на ТО
                </div>
                <div class="service__service-buttons">
                    <button class="service__service-btn1" data-fancybox data-src="#order-call">Записаться</button>
                    <Modal id="order-call" title="Заказать звонок">
                        <Form id="order-call__form"></Form>
                    </Modal>
                    <button class="service__service-btn2" data-fancybox data-src="#order-call">Подробнее</button>
                </div>
            </div>
            <div class="service__service">
                <div class="service__service-title">
                    Запись на ТО2
                </div>
                <div class="service__service-buttons">
                    <button class="service__service-btn1" data-fancybox data-src="#order-call">Записаться</button>
                    <button class="service__service-btn2" data-fancybox data-src="#order-call">Подробнее</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
h2 {
    color: #333333;
    padding-block: 56px 28px;
}

.service {
    color: #333333;
    display: grid;
    grid-template-columns: 610px 610px;
    justify-content: space-between;

    &__service {
        background-color: rgb(246, 246, 246);
        padding: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        &-title {
            font-size: 18px;
        }

        &-buttons {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }

        &-btn1 {
            padding: 10px 20px;
            background-color: #F9B728;
            font-weight: 600;
            outline: 1px solid #F9B728;
            transition: .1s;

            &:hover {
                outline: 1px solid #333333;
            }

            &:active {
                outline: 2px solid #333333;
            }
        }

        &-btn2 {
            padding: 10px 20px;
            color: white;
            background-color: #333333;
            font-weight: 600;
            outline: 1px solid #333333;
            transition: .1s;

            &:hover {
                background-color: white;
                color: #333333;
            }

            &:active {
                outline: 2px solid #333333;
            }
        }
    }
}
</style>