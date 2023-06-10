<template>
    <view class="chat-item-root">
        <view class="header" v-if="chatItem.isShowTime">
            <text class="header-time">{{ chatItem.createTime }}</text>
        </view>
        <view class="body" :class="{self:chatItem.userId === userId}">
            <image class="body-avatar" :src="chatItem.avatar"></image>
            <view class="body-message">
                <text class="body-message-text">{{ chatItem.message }}</text>
            </view>
            <view class="body-space"></view>
        </view>
    </view>
</template>

<script>
export default {
    //组件名
    name: "chat-item",
    //依赖的组件
    components: {},
    //数据
    data() {
        return {
            userId: ''
        }
    },
    //方法
    methods: {},
    created() {
        this.userId = this.$store.state.userInfo.id
    },
    //绑定父组件的属性
    props: {
        chatItem: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped lang="scss">
.chat-item-root {
    display: flex;
    flex-direction: column;
    gap: 20rpx;

    .header {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .body {
        display: flex;
        gap: 20rpx;

        &-avatar {
            @include image(m, 10rpx)
        }

        &-message {
            display: flex;
            background-color: $white;
            padding: 15rpx;
            border-radius: 15rpx;
            border-top-left-radius: 0rpx;
        }

        &-space {
            min-width: 100rpx;
        }

        &.self {
            flex-direction: row-reverse;

            .body-message {
                background-color: lighten($blue, 20%);
                border-radius: 15rpx;
                border-top-right-radius: 0rpx;
            }

        }
    }
}
</style>
