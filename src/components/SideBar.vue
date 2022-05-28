<template>
    <aside class="side">
        <router-link to="/" class="side__logo">SPORT<span>Booking</span></router-link>
        <ul class="side__menu">
            <li v-for="item of menu" :key="item.link">
                <router-link :to="item.link">
                    <img :src="item.img" alt="">
                    {{item.title}}
                </router-link>
            </li>

        </ul>
        <button class="side__logout">
            <img src="@/assets/imgs/logout.svg" alt=""> Chiqish
        </button>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            menu: [
                {
                    link:'/',
                    img: require('@/assets/imgs/home.svg'),
                    title: 'Bosh sahifa'
                },
                {
                    link:'/profile',
                    img: require('@/assets/imgs/profile.svg'),
                    title: 'Shaxsiy sahifa'
                },
                {
                    link:'/list',
                    img: require('@/assets/imgs/list.svg'),
                    title: 'Sport maydonlar'
                },
                {
                    link:'/settings',
                    img: require('@/assets/imgs/settings.svg'),
                    title: 'Sozlamalar  '
                },
                {
                    link:'/fav',
                    img: require('@/assets/imgs/fav.svg'),
                    title: 'Tanlanganlar'
                },
                {
                    link:'/chat',
                    img: require('@/assets/imgs/chat.svg'),
                    title: "Qo'llab-quvvatlash"
                },
            ]
        }
    },
}
</script>

<style lang="scss">
@import '../styles/components/sidebar.scss';
</style>