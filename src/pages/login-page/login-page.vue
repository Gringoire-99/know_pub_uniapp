<template>
    <view class="login-root">
        <view class="header">
            <image class="header-logo" src="../../static/login/logo_small.png"></image>
            <text class="header-logo-name">Know Pub</text>
        </view>
        <view class="body">
            <view class="body-form">
                <input class="body-form-username" placeholder="请输入账号" v-model="loginForm.username"/>
                <input class="body-form-password" type="password" placeholder="请输入密码"
                       v-model="loginForm.password"/>
            </view>
        </view>
        <view class="footer">
            <view class="footer-other">
                <checkbox class="autologin" @click="autoLogin=!autoLogin" checked="true">自动登录</checkbox>
                <text class="forget">忘记密码？</text>
            </view>
            <view class="footer-submit">
                <button class="footer-submit-login" @click="submit">登录</button>
                <navigator url="/pages/register/register" class="footer-submit-register">
                    <button>注册</button>
                </navigator>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            autoLogin: true
        }
    },
    methods: {
        submit() {
            this.$http('/user/login', this.loginForm, 'POST', (res) => {
                if (res.data.code === 200) {
                    uni.showToast({
                        title: '登录成功',
                        duration: 1000
                    })
                    this.$store.commit('SET_USER', res.data.data)
                    this.$store.commit('SET_LOGIN_STATE', true)
                    if (this.autoLogin) {
                        uni.setStorageSync('username', this.loginForm.username)
                        uni.setStorageSync('password', this.loginForm.password)
                        uni.navigateBack()
                    }
                } else {
                    uni.showToast({
                        title: '登录失败!',
                        duration: 1000,
                        icon: 'error'
                    })
                }
            }, (reason) => {
                console.log(reason)

            })
        }
    }
}
</script>

<style scoped lang="scss">
.login-root {
    display: flex;
    flex-direction: column;
    gap: 50rpx;
    height: 100vh;
    padding: 20rpx;

    & > view {
        display: flex;

    }

    .header {
        flex: 1;

        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50rpx;

        &-logo {
            width: 200rpx;
            height: 200rpx;
        }

        &-logo-name {
            font-size: 36rpx;
            color: $gray;
            font-weight: bold;
        }
    }

    .body {
        flex-direction: column;
        gap: 40rpx;

        &-form {
            display: flex;
            flex-direction: column;
            gap: 20rpx;

            input {
                @extend %input-base
            }
        }
    }

    .footer {
        flex: 1;
        flex-direction: column;
        gap: 100rpx;
        font-size: $uni-font-size-base;

        &-other {
            display: flex;

            .forget {
                margin-left: auto;
            }
        }

        &-submit {
            display: flex;
            gap: 20rpx;

            button {
                @extend %button-base

            }

            &-login {
                flex: 4;
                color: $white;
                background-color: $blue;
                border: none;
                transition: background-color;

                &:active {
                    transform: scale(0.99);
                    background-color: $deep-blue;
                }
            }

            &-register {
                flex: 3;

            }
        }

    }
}
</style>
