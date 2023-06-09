<template>
    <view class="register-root">
        <view class="header">
            <text class="header-title">创建账号</text>
        </view>
        <view class="body">
            <view class="body-form">
                <input class="body-form-username" placeholder="用户名(邮箱/手机号)" v-model="form.username"/>
                <input class="body-form-password" placeholder="密码" :password="true" v-model="form.password"/>
                <input class="body-form-password-repeat" placeholder="确认密码" :password="true"
                       v-model="form.passwordRepeat"/>
                <input class="body-form-invitation-code" placeholder="邀请码(可选)" v-model="form.invitationCode"/>
            </view>
        </view>
        <view class="footer">
            <text class="footer-license">点击注册表示同意使用条款</text>
            <view class="footer-submit">
                <button class="footer-submit-register" @click="submit">注册</button>
                <button class="footer-submit-return" @click="back">返回登录</button>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
                passwordRepeat: '',
                invitationCode: ''
            }
        }
    },
    methods: {
        back() {
            uni.navigateBack()
        },
        submit() {
            let user = {};
            user.password = this.form.password
            user.username = this.form.username

            this.$http('/user/register', user, 'POST', (
                res => {
                    if (res.data.code === 200) {
                        uni.showToast({
                            title: '注册成功',
                            duration: 1000
                        });
                        uni.navigateBack()
                    } else {
                        uni.showToast({
                            title: '注册失败已注册',
                            duration: 1000,
                            icon: 'error'
                        });
                    }
                }), (reason => {
                console.log(reason)
            }))
        }
    }
}
</script>

<style scoped lang="scss">
.register-root {
    display: flex;
    flex-direction: column;
    gap: 30rpx;
    padding: 20rpx;

    .header {
        &-title {
            font-size: $uni-font-size-base;
            font-weight: bold;
        }
    }

    .body {
        &-form {
            display: flex;
            flex-direction: column;
            gap: 30rpx;

            input {
                @extend %input-base;
            }
        }
    }

    .footer {
        display: flex;
        flex-direction: column;
        gap: 25rpx;

        &-license {
            color: $blue;
            font-size: $uni-font-size-sm;
        }

        &-submit {
            display: flex;
            gap: 10rpx;

            button {
                @extend %button-base

            }

            &-register {
                color: $white;
                background-color: $blue;
                flex: 4;
            }

            &-return {
                color: $blue;
                background-color: $white;
                flex: 3;
            }
        }
    }
}
</style>
