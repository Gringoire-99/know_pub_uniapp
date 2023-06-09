<template>
    <view class="user-home-root">
        <view class="body">
            <view class="body-li">
                <text>头像</text>
                <view>
                    <image :src="userInfo.avatar"></image>
                </view>
            </view>

            <view class="body-li">
                <text>签名</text>
                <input v-model="userInfo.description"/>
            </view>
            <view class="body-li">
                <text>注册时间</text>
                <text>{{ userInfo.createTime }}</text>
            </view>
            <view class="body-li">
                <text>昵称</text>
                <input v-model="userInfo.nickname"/>
            </view>
            <view class="body-li">
                <text>性别</text>
                <input v-model="userInfo.gender"/>
            </view>
            <view class="body-li">
                <text>真名</text>
                <input v-model="userInfo.realName"/>
            </view>

            <view class="body-li">
                <text>工作</text>
                <input v-model="userInfo.job"/>
            </view>

            <view class="body-li">
                <text>位置</text>
                <input v-model="userInfo.location"/>
            </view>
            <view class="body-li">
                <text>学校</text>
                <input v-model="userInfo.school"/>
            </view>
            <view class="body-li">
                <text>电话</text>
                <input v-model="userInfo.phone"/>
            </view>
            <view class="body-li">
                <text>邮箱</text>
                <input v-model="userInfo.email"/>
            </view>
        </view>
        <view class="footer">
            <button class="footer-update">更新信息</button>
            <button class="footer-logout">退出登录</button>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {}
        };
    },
    created() {
        this.userInfo = this.$store.state.userInfo

    }
}
</script>

<style lang="scss" scoped>
.user-home-root {
    display: flex;
    flex-direction: column;
    padding: 20rpx;
    gap: 20rpx;
    font-size: $uni-font-size-sm;

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20rpx;

        &-li {
            display: flex;
            align-items: center;

            text:first-child {
                flex: 1;
            }

            input, text, image, view {
                flex: 3;
            }

            input {
                border-left: 1px solid lighten($white-gray, 15%);
                padding: 10rpx;

            }

            image {
                @include image(lg, 10rpx);
            }
        }
    }

    .footer {
        display: flex;
        gap: 20rpx;


        &-logout {
            @extend %button-base;
            flex: 1;
            color: $red;
        }

        &-update {
            flex: 2;
            @extend %button-deep-blue;
        }
    }
}
</style>
