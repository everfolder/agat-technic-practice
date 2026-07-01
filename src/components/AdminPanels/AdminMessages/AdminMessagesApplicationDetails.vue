<script setup>

const props = defineProps({
    application: {
        type: Object,
        default: null
    },
    statuses: {
        type: Array,
        required: true
    }
});

defineEmits(['updateStatus', 'delete', 'close']);

const getStatusColor = (status) => {
    const found = props.statuses.find(s => s.value === status);
    return found ? found.color : 'black';
};

const getStatusLabel = (status) => {
    const found = props.statuses.find(s => s.value === status);
    return found ? found.label : status;
};

const formatDate = (dateString) => {
    if (!dateString) return '—';
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return '—';
        return date.toLocaleString( {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return '—';
    }
};
</script>

<template>
    <div v-if="application" class="application-details">
        <div class="details-header">
            <h3>Детали заявки</h3>
            <button @click="$emit('close')" class="btn-close">Закрыть</button>
        </div>

        <div class="details-content">
            <div class="detail-row">
                <span class="detail-label">Имя:</span>
                <span class="detail-value">{{ application.name }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Телефон:</span>
                <span class="detail-value">{{ application.phone }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Email:</span>
                <span class="detail-value">{{ application.email || 'Не указан' }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Дилерский центр:</span>
                <span class="detail-value">{{ application.dealerCenter || 'Не указан' }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Статус:</span>
                <span class="detail-status" :style="{ background: getStatusColor(application.status) }">
                    {{ getStatusLabel(application.status) }}
                </span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Создана:</span>
                <span class="detail-value">{{ formatDate(application.createdAt) }}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Обновлена:</span>
                <span class="detail-value">{{ formatDate(application.updatedAt) }}</span>
            </div>

            <div class="actions">
                <div class="status-actions">
                    <label>Изменить статус:</label>
                    <select 
                        :value="application.status"
                        @change="$emit('updateStatus', application, $event.target.value)" 
                        class="status-select"
                    >
                        <option v-for="status in statuses" :key="status.value" :value="status.value">
                            {{ status.label }}
                        </option>
                    </select>
                </div>
                <button @click="$emit('delete', application.id)" class="btn-danger">
                    Удалить заявку
                </button>
            </div>
        </div>
    </div>
    <div v-else class="no-selection">
        <p>Выберите заявку из списка</p>
    </div>
</template>

<style scoped lang="scss">
.application-details {
    background: white;
    border: 1px solid #bdbdbd;
    padding: 20px;
    max-height: 600px;

    .details-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #dddddd;

        h3 {
            margin: 0;
            font-size: 18px;
        }

        .btn-close {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            padding: 0 5px;
            color: #707070;
        }
    }

    .details-content {
        .detail-row {
            display: flex;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;

            &:last-child {
                border-bottom: none;
            }

            .detail-label {
                font-weight: 500;
            }

            .detail-value {
                text-align: right;
                max-width: 60%;
            }

            .detail-status {
                padding: 4px 12px;
                border-radius: 20px;
                color: white;
                font-size: 13px;
                font-weight: 500;
            }
        }

        .actions {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #dddddd;

            .status-actions {
                display: flex;
                align-items: center;
                gap: 10px;
                margin-bottom: 15px;

                label {
                    font-weight: 500;
                    font-size: 14px;
                    white-space: nowrap;
                }

                .status-select {
                    padding: 8px 12px;
                    border: 1px solid #bdbdbd;
                    font-size: 14px;
                    flex: 1;
                    background: white;
                    cursor: pointer;
                }
            }

            .btn-danger {
                padding: 10px 20px;
                background: #f44336;
                color: white;
                border: none;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                width: 100%;
            }
        }
    }
}

.no-selection {
    border: 1px solid #bdbdbd;
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 600px;
    min-height: 400px;

    p {
        font-size: 18px;
    }
}
</style>