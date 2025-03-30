<template>
    <div class="slider">
        <!-- Parcours des éléments de 'items' (qui sont les catégories) -->
        <div class="card" v-for="item in items" :key="item.id">
            <router-link :to="item.url" >
                {{ item.name }}

            </router-link>

        </div>
    </div>
</template>

<script>
import { categories } from '../utils/data'; // Importation des données

export default {
    data() {
        return {
            // 'categories' doit être une liste d'éléments dans le tableau 'items'
            items: categories
        };
    }
};
</script>

<style scoped>
/* Votre style reste inchangé */
.slider {
    display: flex;
    padding: 20px;
    overflow: auto;
}

.slider .card {
    min-width: 100px;
    height: 30px;
    padding: 1px;
    margin: 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
.card .nuxt-link-exact-active {
    color: #003366;
    font-weight: bolder;

}
.card a{
    text-decoration: none;
    font-size: 0.9rem;
    color: grey;
    text-align: center;
    font-size: 1.3rem;
}

.info-box .last-price {
    text-decoration: line-through;
}

.card .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 85px;
}

.bottom svg {
    width: 18px;
    color: rgb(6, 122, 200);
}

.bottom span {
    font-weight: 600;
    color: rgb(6, 122, 200);
}
</style>