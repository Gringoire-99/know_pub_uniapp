<template>
    <view class="request-card-root">
        <view class="header">
            <view class="header-reject">
                <button>拒绝</button>
            </view>
            <view class="header-avatar">
                <image :src="request.avatar"></image>
            </view>
            <view class="header-agree">
                <button>同意</button>
            </view>
        </view>
        <view class="body">
            <text class="body-nickname">{{ request.nickname }}</text>
            <text class="body-time">{{ request.createTime }}</text>
        </view>
        <view class="footer">
            <text class="footer-message">{{ request.message }}</text>
        </view>
    </view>
</template>

<script>
export default {
    //组件名
    name: "request-card",
    //依赖的组件
    components: {},
    //数据
    data() {
        return {}
    },
    //方法
    methods: {},

    props: {
        request: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped lang="scss">
.request-card-root {
    display: flex;
    flex-direction: column;
    padding: 30rpx;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 30rpx;
    gap: 10rpx;

    .header {
        display: flex;
        position: relative;
        padding: 30rpx;

        & > image, view {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        image {
            @include image(lg);
            position: absolute;
            top: -80rpx;
            height: 150rpx;
            width: 150rpx;
        }

        button {
            min-width: 130rpx;
        }

        &-reject {
            button {
                @extend %button-small;
                @extend %button-danger;

                border-radius: 30rpx;
            }
        }

        &-agree {
            button {
                @extend %button-small;
                @extend %button-deep-blue;

                border-radius: 30rpx;
            }
        }

    }

    .body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &-nickname {
            font-weight: bold;
            font-size: $uni-font-size-lg;
        }

        &-time {
            font-weight: lighter;
            color: $gray;
            font-size: $uni-font-size-sm;
        }
    }

    .footer {
        padding: 30rpx;
        background-color: darken($uni-bg-color-grey, 2%);
        border-radius: 20rpx;

        &-message {
            font-size: $uni-font-size-sm;
        }
    }
}
</style>
