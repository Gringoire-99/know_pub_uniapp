<template>
    <view class="message-root">
        <view class="avatar">
                <image :src="message.avatar"></image>
            <view class="avatar-badge" v-if="message.messageCount>0">{{ message.messageCount }}</view>
        </view>
        <view class="content">
            <text class="name">{{ message.name }}</text>
            <text class="message">
                {{ String(message.message).length > 20 ? message.message.substring(0, 20) + '...' : message.message }}
            </text>
        </view>
        <text class="time">{{ message.time }}</text>
    </view>
</template>

<script>
export default {
    //组件名
    name: "message",
    //依赖的组件
    components: {},
    //数据
    data() {
        return {}
    },
    props: {
        message: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped lang="scss">
.message-root {
    @include align($ai: flex-start);
    gap: 20rpx;

    .avatar {
        position: relative;

        image {
            @include image(lg, 20rpx);
        }

        &-badge {
            position: absolute;
            min-width: 30rpx;
            min-height: 30rpx;
            padding: 5rpx;
            top: 0;
            right: 0;
            transform: translate(25%, -25%);
            border-radius: 50%;
            background: lighten($red, 20%);
            color: $white;
            font-size: $fs-xxsmall;
            @include align();
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;

        .name {
        }

        .message {
            font-size: $uni-font-size-sm;
            color: $uni-text-color-grey;
        }
    }

    .time {
        font-size: $uni-font-size-sm;
        color: $uni-text-color-grey;
    }
}
</style>
