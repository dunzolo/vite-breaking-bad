<script>
export default {
    props: {
        card: Object
    }
}
</script>

<template lang="">
    <div>
        <img :src="card.card_images[0].image_url_small" alt="">
    </div>
</template>

<style lang="scss" scoped>

</style>