<script>
export default {
    created() {

    },
    onLaunch: function () {
        let user = {}
        user.username = uni.getStorageSync('username')
        user.password = uni.getStorageSync('password')
        if (user.username && user.password) {
            this.$http('/user/login', user, 'POST', (res) => {
                if (res.data.code === 200) {
                    uni.showToast({
                        title: '登录成功',
                        duration: 1000
                    })
                    this.$store.commit('SET_USER', res.data.data)
                    this.$store.commit('SET_LOGIN_STATE', true)
                } else {
                    uni.showToast({
                        title: '登录失败!',
                        duration: 1000,
                        icon: 'error'
                    })
                    uni.clearStorage();
                    uni.navigateTo({
                        url: '/pages/login-page/login-page'
                    })
                }
            }, (reason) => {
                console.log(reason)
            })
        } else {
            uni.navigateTo({
                url: '/pages/login-page/login-page'
            })
        }


    },
    onShow: function () {
        console.log('App Show')
    },
    onHide: function () {
        console.log('App Hide')
    },
}
</script>

<style lang="scss">
@import 'scss/global.scss';
</style>
