<script setup>
const props = defineProps({
    applications: {
        type: Array,
        required: true
    },
    selectedId: {
        type: [String, Number],
        default: null
    },
    statuses: {
        type: Array,
        required: true
    }
});

defineEmits(['select']);

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
        return date.toLocaleString('ru-RU', {
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
    <div class="applications-list">
        <h3>Список заявок</h3>
        <div v-if="applications.length === 0" class="empty-state">
            <span class="empty-sub">Нет заявок</span>
        </div>
        <div 
            v-for="app in applications" 
            :key="app.id" 
            class="application-item"
            :class="{ active: selectedId === app.id }" 
            @click="$emit('select', app)"
        >
            <div class="app-header">
                <span class="app-name">{{ app.name }}</span>
                <span class="app-status" :style="{ background: getStatusColor(app.status) }">
                    {{ getStatusLabel(app.status) }}
                </span>
            </div>
            <div class="app-details">
                <span>{{ app.phone }}</span>
                <span>{{ app.dealerCenter || 'Не указан' }}</span>
                <span class="app-date">{{ formatDate(app.createdAt) }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.applications-list {
    border: 1px solid #bdbdbd;
    padding: 20px;
    max-height: 600px;
    overflow-y: auto;

    h3 {
        margin: 0 0 15px 0;
        font-size: 18px;
    }
}

.application-item {
    padding: 15px;
    border: 1px solid #dddddd;
    margin-bottom: 10px;
    cursor: pointer;

    .app-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        .app-name {
            font-weight: 600;
            font-size: 16px;
        }

        .app-status {
            padding: 4px 12px;
            border-radius: 20px;
            color: white;
            font-size: 12px;
            font-weight: 500;
            white-space: nowrap;
        }
    }

    .app-details {
        display: flex;
        gap: 15px;
        font-size: 13px;
        flex-wrap: wrap;
    }
}

.empty-state {
    padding: 40px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 600px;
    min-height: 290px;

    .empty-sub {
        font-size: 18px;
    }
}
</style>