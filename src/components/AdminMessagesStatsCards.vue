<script setup>
defineProps({
    stats: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-number">{{ stats.total }}</div>
            <div class="stat-label">Всего заявок</div>
        </div>
        <div class="stat-card" style="border-image: linear-gradient(to right, #2196F3, white) 1">
            <div class="stat-number">{{ stats.newCount }}</div>
            <div class="stat-label">Новых</div>
        </div>
        <div class="stat-card" style="border-image: linear-gradient(to right, #FF9800, white) 1">
            <div class="stat-number">{{ stats.inProgress }}</div>
            <div class="stat-label">В обработке</div>
        </div>
        <div class="stat-card" style="border-image: linear-gradient(to right, #4CAF50, white) 1">
            <div class="stat-number">{{ stats.completed }}</div>
            <div class="stat-label">Завершенных</div>
        </div>
        <div class="stat-card" style="border-image: linear-gradient(to right, #f44336, white) 1">
            <div class="stat-number">{{ stats.rejected }}</div>
            <div class="stat-label">Отклоненных</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-bottom: 30px;
}

.stat-card {
    background: white;
    padding: 20px;
    border: 1px solid #ffffff;
    border-image: linear-gradient(to right, #3d3d3d, white) 1;
    text-align: center;

    .stat-number {
        font-size: 32px;
        font-weight: bold;
    }

    .stat-label {
        font-size: 14px;
        margin-top: 5px;
    }
}
</style>