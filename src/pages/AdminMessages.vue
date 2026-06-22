<script setup>
import { ref, onMounted, computed } from 'vue';
import AdminMessagesApplicationDetails from '@/components/AdminMessagesApplicationDetails.vue';
import AdminMessagesApplicationsList from '@/components/AdminMessagesApplicationsList.vue';
import AdminMessagesFiltersBar from '@/components/AdminMessagesFiltersBar.vue';
import AdminMessagesStatsCards from '@/components/AdminMessagesStatsCards.vue';

const applications = ref([]);
const selectedApplication = ref(null);
const filterStatus = ref('all');
const searchQuery = ref('');

const statuses = [
    { value: 'new', label: 'Новая', color: '#2196F3' },
    { value: 'in_progress', label: 'В обработке', color: '#FF9800' },
    { value: 'completed', label: 'Завершена', color: '#4CAF50' },
    { value: 'rejected', label: 'Отклонена', color: '#f44336' }
];

const loadApplications = () => {
    const saved = localStorage.getItem('applications');
    if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
            applications.value = parsed;
        }
    } else {
        applications.value = [];
    }
};

const saveApplications = () => {
    localStorage.setItem('applications', JSON.stringify(applications.value));
};

const updateStatus = (app, newStatus) => {
    app.status = newStatus;
    app.updatedAt = new Date().toISOString();
    saveApplications();
};

const deleteApplication = (id) => {
    applications.value = applications.value.filter(app => app.id !== id);
    saveApplications();
    if (selectedApplication.value?.id === id) {
        selectedApplication.value = null;
    }
};

const selectApplication = (app) => {
    selectedApplication.value = app;
};

const filteredApplications = computed(() => {
    let filtered = applications.value;
    if (filterStatus.value !== 'all') {
        filtered = filtered.filter(app => app.status === filterStatus.value);
    }
    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase().trim();
        filtered = filtered.filter(app =>
            app.name?.toLowerCase().includes(query) ||
            app.phone?.includes(query) ||
            app.email?.toLowerCase().includes(query) ||
            app.dealerCenter?.toLowerCase().includes(query)
        );
    }
    return filtered;
});

const stats = computed(() => {
    if (!Array.isArray(applications.value)) {
        return { total: 0, newCount: 0, inProgress: 0, completed: 0, rejected: 0 };
    }
    const total = applications.value.length;
    const newCount = applications.value.filter(app => app.status === 'new').length;
    const inProgress = applications.value.filter(app => app.status === 'in_progress').length;
    const completed = applications.value.filter(app => app.status === 'completed').length;
    const rejected = applications.value.filter(app => app.status === 'rejected').length;
    return { total, newCount, inProgress, completed, rejected };
});

onMounted(() => {
    loadApplications();
});
</script>

<template>
    <div class="admin-panel">
        <h1 class="panel-title">Админ-панель обработки заявок</h1>
        <AdminMessagesStatsCards :stats="stats" />
        <AdminMessagesFiltersBar 
            v-model:filter-status="filterStatus"
            v-model:search-query="searchQuery"
            :count="filteredApplications.length"
            :statuses="statuses"
        />
        <div class="applications-container">
            <AdminMessagesApplicationsList 
                :applications="filteredApplications"
                :selected-id="selectedApplication?.id"
                @select="selectApplication"
                :statuses="statuses"
            />
            <AdminMessagesApplicationDetails 
                :application="selectedApplication"
                :statuses="statuses"
                @update-status="updateStatus"
                @delete="deleteApplication"
                @close="selectedApplication = null"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.admin-panel {
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px;
}

.panel-title {
    font-size: 28px;
    margin-bottom: 30px;
    font-weight: 600;
}

.applications-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
</style>