<template>
    <view class="friend-request-root">
        <request-card :request="request" v-for="request in requests" :key="request.id"></request-card>
    </view>
</template>

<script>
import RequestCard from "../../components/request-card/request-card.vue";

export default {
    components: {RequestCard},
    data() {
        return {
            requests: [
                {
                    id: '1',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '用户：1535103',
                    message: '你好',
                    createTime: '2023-6-10'
                },
                {
                    id: '2',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '用户：1535103',
                    message: '你好',
                    createTime: '2023-6-10'
                },
                {
                    id: '3',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '用户：1535103',
                    message: '你好',
                    createTime: '2023-6-10'
                },
                {
                    id: '4',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '用户：1535103',
                    message: '你好',
                    createTime: '2023-6-10'
                },
            ]
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.friend-request-root {
    display: flex;
    flex-direction: column;
    gap: 80rpx;
    padding: 60rpx 30rpx 30rpx 30rpx;
}
</style>
