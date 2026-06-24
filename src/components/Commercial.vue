<script setup>
import { ref } from 'vue';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Modal from '@/components/Modal.vue';

const name = ref('')
const phone = ref('')
const agree = ref(false)
const errors = ref({ 
    name: false, 
    phone: false, 
    agree: false 
})

const loadApplications = () => {
    const saved = localStorage.getItem('applications')
    if (saved) {
        try {
            return JSON.parse(saved)
        } catch (e) {
            return []
        }
    }
    return []
}

const submitForm = () => {
    errors.value = {
        name: !name.value.trim(),
        phone: !phone.value.trim() || phone.value.replace(/\D/g, '').length < 11,
        agree: !agree.value
    }
    if (!errors.value.name && !errors.value.phone && !errors.value.agree) {
        const existingApplications = loadApplications()
        const newApplication = {
            id: Date.now(),
            name: name.value,
            phone: phone.value,
            status: 'new',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        existingApplications.unshift(newApplication)
        localStorage.setItem('applications', JSON.stringify(existingApplications))
        name.value = ''
        phone.value = ''
        agree.value = false
         Fancybox.show([
            {
                src: '#send',
                type: "inline",
            }
        ])
    }
}
</script>

<template>
    <form class="commercial" @submit.prevent="submitForm">
        <div class="commercial__title">Узнайте прямо сейчас!<br>Мы перезвоним<br>и расскажем подробности!</div>
        <div class="commercial__body">
            <div class="commercial__field" :class="{ 'input-error': errors.name }">
                <input type="text" placeholder="Имя" v-model="name">
            </div>
            
            <div class="commercial__field" :class="{ 'input-error': errors.phone }">
                <input type="text" placeholder="Телефон" v-mask="'+7 (000) 000-00-00'" v-model="phone">
            </div>
            
            <div class="commercial__footer">
                <button type="submit" class="commercial__btn">Хорошо, жду звонка</button>
                <label class="custom-checkbox" :class="{ 'input-error': errors.agree }">
                    <input type="checkbox" v-model="agree">
                    <span class="checkmark"></span>
                    Подтверждаю согласие<br>на обработку персональных данных
                </label>
            </div>
        </div>
        <Modal id="send" title="&nbsp;">
            <div class="send__message">
                Спасибо. Ваша заявка принята. Наши специалисты свяжутся с Вами в ближайшее время.
            </div>
        </Modal>
    </form>
</template>

<style scoped lang="scss">
.commercial {
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    gap: 50px;
    color: white;
    font-size: 20px;

    &__title {
        text-align: center;
    }

    &__body {
        max-width: 300px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__footer {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    &__btn {
        background-color: #F9B728;
        color: black;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 18px;
        padding: 10px 20px;
        border: 1px solid #F9B728;
        transition: .4s all;
        cursor: pointer;

        &:hover {
            border: 1px solid black;
        }
    }
}

input {
    background-color: white;
    padding: 10px 20px;
    border: 1px solid white;
    transition: .3s all;
    color: black;
    width: 100%;
    box-sizing: border-box;

    &::placeholder {
        color: black;
        transition: .3s all;
    }
}

input:hover {
    border: 1px solid #F9B728;

    &::placeholder {
        color: #F9B728;
    }
}

.commercial__field.input-error input {
    border-bottom: 4px solid red;
}

.custom-checkbox {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding-left: 0;
    font-size: 12px;
    transition: all 0.4s ease;
    flex: 1;
    cursor: pointer;
}

.custom-checkbox.input-error .checkmark {
    border-bottom: 4px solid red;
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
    background: transparent;
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

.send__message {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 40px;
}
</style>