<script setup>
const props = defineProps({
    id: String
})

const focusInput = (event) => {
    event.target.previousElementSibling.classList.add('active')
}

const blurInput = (event) => {
    if (event.target.value === '') {
        event.target.previousElementSibling.classList.remove('active')
    }
}
</script>

<template>
    <form action="#" class="order-call">
        <div>
            <label for="order-call__select">Выберите диллерский центр</label>
            <select id="order-call__select" required>
                <option>Нижний Новгород, ул. Ларина, 23г</option>
            </select>
        </div>
        <div>
            <label for="order-call__name-input" id="name-label">Имя*</label>
            <input type="text" id="order-call__name-input" required @focus="focusInput" @blur="blurInput">
        </div>
        <div>
            <label for="order-call__phone-input" id="phone-label">Телефон*</label>
            <input type="text" id="order-call__phone-input" required @focus="focusInput" @blur="blurInput">
        </div>
        <div class="order-call__submit-form">
            <label class="custom-checkbox">
                <input type="checkbox" required>
                <span class="checkmark"></span>
                Даю согласие на обработку персональных данных и подтверждаю,
                что ознакомлен с политикой обработки персональных данных
            </label>
            <button class="order-call__send-button">Отправить</button>
        </div>
    </form>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.order-call {
    display: flex;
    flex-direction: column;
    gap: 26px;
}

div {
    display: flex;
    flex-direction: column;
    position: relative;
}

input, select {
    height: 42px;
    padding-left: 15px;
    border: 1px solid #DADADA;
}

input:focus, select:focus {
    border: 2px solid #DADADA;
}

label {
    padding-left: 15px;
    font-size: 16px;
    transition: all 0.2s ease;
}

#name-label, #phone-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    pointer-events: none;
}

#name-label.active, #phone-label.active {
    top: -20%;
    transform: translateY(-50%);
    font-size: 14px;
}

.order-call__submit-form {
    display: flex;
    flex-direction: row;
    gap: 15px;
}

.custom-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding-left: 0;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.4s ease;
}

.custom-checkbox input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
}

.checkmark {
    min-width: 20px;
    height: 20px;
    border: 1px solid #DADADA;
    display: inline-block;
    position: relative;
    flex-shrink: 0;
    transition: all 0.4s ease;
}

.custom-checkbox input:checked + .checkmark {
    background-color: #F9B728;
    border-color: #F9B728;
    transition: all 0.4s ease;
}

.custom-checkbox input:checked + .checkmark::after {
    content: '';
    position: absolute;
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.order-call__send-button {
    padding: 15px 12px;
    background: #F9B728;
    color: black;
    font-weight: 600;
    border: 1px solid #F9B728;
    transition: all 0.4s ease;
}

.order-call__send-button:hover {
    border: 1px solid black;
    transition: all 0.4s ease;
}
</style>