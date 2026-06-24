<script setup>
defineProps({
    filterStatus: {
        type: String,
        required: true
    },
    searchQuery: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    statuses: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['update:filterStatus', 'update:searchQuery']);

const updateFilterStatus = (event) => {
    emit('update:filterStatus', event.target.value);
};

const updateSearchQuery = (event) => {
    emit('update:searchQuery', event.target.value);
};
</script>

<template>
    <div class="filters">
        <div class="filter-group">
            <label>Статус:</label>
            <select :value="filterStatus" @change="updateFilterStatus" class="filter-select">
                <option value="all">Все</option>
                <option v-for="status in statuses" :key="status.value" :value="status.value">
                    {{ status.label }}
                </option>
            </select>
        </div>
        <div class="filter-group">
            <label>Поиск:</label>
            <input 
                :value="searchQuery" 
                @input="updateSearchQuery" 
                placeholder="Имя, телефон, email..." 
                class="search-input"
            >
        </div>
        <div class="filter-group">
            <span class="count-badge">Найдено: {{ count }}</span>
        </div>
    </div>
</template>


<style scoped lang="scss">
.filters {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-wrap: wrap;
    background: white;
    padding: 15px 20px;
    align-items: center;
    border: 1px solid #bdbdbd;

    .filter-group {
        display: flex;
        align-items: center;
        gap: 10px;

        label {
            font-weight: 500;
            font-size: 14px;
        }

        .filter-select,
        .search-input {
            padding: 8px 12px;
            border: 1px solid #dddddd;
            font-size: 14px;
        }

        .search-input {
            min-width: 200px;
        }

        .count-badge {
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>