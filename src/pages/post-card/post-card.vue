<template>
    <view class="post-card-root">
        <image class="bg" :src="userInfo.avatar" mode="aspectFill">
        </image>

        <view class="body">
            <image class="body-avatar" :src="userInfo.avatar"></image>
            <text class="body-nickname">{{ userInfo.nickname }}</text>
            <text class="body-desc">{{ userInfo.description }}</text>
        </view>
        <view class="footer">
            <button>加为好友</button>
        </view>

    </view>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                avatar: '../../static/userinfo/aow.jpg',
                nickname: '橘喵#00ff',
                description: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eos ex exercitationem expedita, fuga impedit laborum minus nam neque nostrum odit possimus quibusdam '
            }
        }
    },
    methods: {},
}
</script>

<style scoped lang="scss">
.post-card-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100rpx 20rpx 20rpx;

    .bg {
        position: absolute;
        left: -15%;
        right: 0;
        top: 0;
        bottom: 0;
        width: 130%;
        height: 100%;
        z-index: -1;
        filter: blur(30px);
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding-left: 100rpx;
        padding-right: 100rpx;
        gap: 30rpx;
        align-items: center;

        &-avatar {
            border-radius: 50rpx;
            border: 6rpx solid white;
            width: 350rpx;
            height: 350rpx;
        }

        &-nickname {
            font-weight: bold;
            font-size: $fs-xxlarge;
        }
    }

    .footer {
        margin-top: auto;
        position: fixed;
        bottom: 20rpx;
        left: 40rpx;
        right: 40rpx;

        button {
            @extend %button-deep-blue;
            border: none;
        }
    }
}
</style>
