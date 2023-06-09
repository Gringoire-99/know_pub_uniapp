<template>
    <view class="add-friend-root">
        <image class="bg" :src="userInfo.avatar"></image>
        <view class="space"></view>
        <view class="body">
            <image class="body-avatar" :src="userInfo.avatar"></image>
            <text class="body-nickname">{{ userInfo.nickname }}</text>
            <textarea v-model="message" class="body-message"></textarea>
            <view class="body-footer">
                <button class="body-footer-cancel" @click="cancel">取消</button>
                <button class="body-footer-submit">发送</button>
            </view>
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
            },
            message: '你好'
        }
    },
    methods: {
        cancel() {
            uni.navigateBack()
        }
    }
}
</script>

<style scoped lang="scss">
.add-friend-root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 20rpx;

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

    .space {
        flex: 1;
        background: none;

    }

    .body {
        flex: 5;
        background: white;
        display: flex;
        flex-direction: column;
        gap: 20rpx;
        border-top-right-radius: 50rpx;
        border-top-left-radius: 50rpx;
        position: relative;
        padding: 120rpx 60rpx 60rpx 60rpx;

        &-avatar {
            border-radius: 50%;
            height: 200rpx;
            width: 200rpx;
            border: 5rpx solid white;
            position: absolute;
            top: -100rpx;
            left: 50rpx;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        }

        &-nickname {
            font-size: $fs-xxlarge;
        }

        &-message {
            flex: 1;
            padding: 20rpx;
            border-radius: 10rpx;
            width: 80vw;
            background: darken($uni-bg-color-grey, 2%);
        }

        &-footer {
            display: flex;
            gap: 20rpx;

            &-cancel {
                flex: 1;
                background: $uni-bg-color-grey;
            }

            &-submit {
                flex: 3;
                @extend %button-deep-blue;

            }
        }
    }


}
</style>
