<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const props = defineProps({
    id: String
})

const form = ref(null)

const focusInput = (event) => {
    const input = event.target;
    const parent = input.parentElement;
    const label = parent.querySelector('label');
    const errorSpan = parent.querySelector('.error');
    if (label) {
        label.classList.add('active');
    }
    input.classList.remove('input-error');
    if (errorSpan) {
        errorSpan.classList.remove('error-visible');
    }
}

const blurInput = (event) => {
    const input = event.target;
    const parent = input.parentElement;
    const label = parent.querySelector('label');
    if (input.value === '' && label) {
        label.classList.remove('active');
    }
}

const customError = (event) => {
    event.preventDefault();
    const input = event.target;
    const parent = input.parentElement;
    const label = parent.querySelector('label');
    const errorSpan = parent.querySelector('.error');

    if (input.validity.valueMissing) {
        input.classList.add('input-error');
        if (errorSpan) {
            errorSpan.classList.add('error-visible');
            errorSpan.textContent = 'Пожалуйста, заполните это поле';
        }
        if (label && input.value === '') {
            label.classList.add('active');
        }
    }
}

const checkboxError = (event) => {
    event.preventDefault();
    const checkbox = event.target;
    const label = checkbox.closest('.custom-checkbox');
    const parent = label.parentElement;
    const errorSpan = parent.querySelector('.error');
    if (checkbox.validity.valueMissing) {
        label.classList.add('input-error');
        if (errorSpan) {
            errorSpan.classList.add('error-visible');
            errorSpan.textContent = 'Необходимо согласие на обработку данных';
        }
    }
}

const checkboxChange = (event) => {
    const checkbox = event.target;
    const label = checkbox.closest('.custom-checkbox');
    const parent = label.parentElement;
    const errorSpan = parent.querySelector('.error');
    if (checkbox.checked) {
        label.classList.remove('input-error');
        if (errorSpan) {
            errorSpan.classList.remove('error-visible');
        }
    }
}

const submitForm = (event) => {
    event.preventDefault();
    if (!form.value) {
        console.error('Форма не найдена');
        return;
    }
    if (form.value.checkValidity()) {
        Fancybox.show([
            {
                src: `#${props.id || 'send'}`,
                type: "inline",
            }
        ]);
    } else {
        const inputs = form.value.querySelectorAll('input, select');
        inputs.forEach(input => {
            if (!input.validity.valid) {
                const event = new Event('invalid', { bubbles: true });
                input.dispatchEvent(event);
            }
        });
    }
}
</script>

<template>
    <form ref="form" action="#" class="order-call" @submit.prevent="submitForm">
        <div>
            <label for="order-call__select">Выберите диллерский центр</label>
            <select id="order-call__select" required>
                <option>Нижний Новгород, ул. Ларина, 23г</option>
            </select>
            <span class="error"></span>
        </div>
        <div class="input-wrapper">
            <label for="order-call__name-input" id="name-label">Имя*</label>
            <input type="text" id="order-call__name-input" required @focus="focusInput" @blur="blurInput"
                class="name-input" @invalid="customError">
            <span class="error"></span>
        </div>
        <div class="input-wrapper">
            <label for="order-call__phone-input" id="phone-label">Телефон*</label>
            <input type="text" id="order-call__phone-input" required @focus="focusInput" @blur="blurInput"
                v-mask="'+7 (000) 000-00-00'" value="" class="phone-input" @invalid="customError">
            <span class="error"></span>
        </div>
        <div class="order-call__submit-form">
            <label class="custom-checkbox">
                <input type="checkbox" required class="submit-form__checkbox" @invalid="checkboxError"
                    @change="checkboxChange">
                <span class="checkmark"></span>
                Даю согласие на обработку персональных данных и подтверждаю,
                что ознакомлен с политикой обработки персональных данных
            </label>
            <span class="error"></span>
            <button class="order-call__send-button" type="submit">Отправить</button>
            <Modal :id="props.id || 'send'" title="&nbsp;">
                <div class="send__message">
                    Спасибо. Ваша заявка принята. Наши специалисты свяжутся с Вами в ближайшее время.
                </div>
            </Modal>
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

.input-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 52px;
}

div:not(.input-wrapper):not(.order-call__submit-form) {
    display: flex;
    flex-direction: column;
    position: relative;
}

input,
select {
    height: 42px;
    padding-left: 15px;
    border: 1px solid #DADADA;
    transition: 0.2s ease;
}

input:focus,
select:focus {
    border: 2px solid #DADADA;
    outline: none;
}

label {
    padding-left: 15px;
    font-size: 16px;
    transition: 0.2s ease;
}

#name-label,
#phone-label {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
    margin: 0;
    pointer-events: none;
    z-index: 1;
    transition: 0.2s ease;
}

#name-label.active,
#phone-label.active {
    top: -10px;
    font-size: 14px;
    padding-left: 15px;
}

.order-call__submit-form {
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: flex-start;
}

.custom-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding-left: 0;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.4s ease;
    flex: 1;
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
    margin-top: 0px;
}

.custom-checkbox input:checked+.checkmark {
    background-color: #F9B728;
    border-color: #F9B728;
    transition: all 0.4s ease;
}

.custom-checkbox input:checked+.checkmark::after {
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
    cursor: pointer;
    flex-shrink: 0;
    height: 52px;
}

.order-call__send-button:hover {
    border: 1px solid black;
    transition: all 0.4s ease;
}

.error {
    display: none;
    color: #F9B728;
    font-size: 13px;
    margin-top: 4px;
    padding-left: 0;
    position: absolute;
    bottom: -5px;
    left: 0;
}

.error-visible {
    display: block;
}

.input-error {
    border-color: #F9B728;
    border-width: 2px;
}

.custom-checkbox.input-error .checkmark {
    border-color: #F9B728;
}

input:invalid,
select:invalid {
    box-shadow: none;
}

.order-call__submit-form .error {
    position: absolute;
    bottom: -20px;
    left: 0;
}

.order-call__submit-form {
    position: relative;
}

.send__message {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
}

#send .fancybox__close {
    display: none !important;
}
</style>