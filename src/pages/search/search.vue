<template>
    <view class="search-root">
        <view class="header">
            <view class="header-search">
                <input placeholder="输入搜索内容"/>
                <image src="../../static/message/search.png" class="header-icon"></image>
            </view>
            <text class="header-cancel">取消</text>
        </view>
        <view class="body">
            <view class="body-ul">
                <text>用户</text>
                <view class="body-ul-li" v-for="user in users" :key="user.id">
                    <navigator url="/pages/post-card/post-card">
                        <image class="body-ul-li-avatar" :src="user.avatar"></image>
                    </navigator>
                    <text class="body-ul-li-nickname">{{ user.nickname }}</text>
                    <button class="body-ul-li-operation" :class="{friend:user.isFriend}">
                        {{ user.isFriend ? '发消息' : '加好友 ' }}
                    </button>
                </view>
            </view>
            <view class="body-ul">
                <text>群组</text>
                <view class="body-ul-li" v-for="user in users" :key="user.id">
                    <image class="body-ul-li-avatar" :src="user.avatar"></image>
                    <text class="body-ul-li-nickname">{{ user.nickname }}</text>
                    <button class="body-ul-li-operation">加群</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    //组件名
    name: "search",
    //依赖的组件
    components: {},
    //数据
    data() {
        return {
            users: [
                {avatar: 'http://dummyimage.com/100x100', nickname: '用户001', id: '1', isFriend: true},
                {avatar: 'http://dummyimage.com/100x100', nickname: '用户001', id: '2', isFriend: false},
                {avatar: 'http://dummyimage.com/100x100', nickname: '用户001', id: '3', isFriend: true},
                {avatar: 'http://dummyimage.com/100x100', nickname: '用户001', id: '4', isFriend: false},
                {avatar: 'http://dummyimage.com/100x100', nickname: '用户001', id: '5', isFriend: true},
            ]
        }
    },
    //方法
    methods: {},
    //挂载时执行

}
</script>

<style scoped lang="scss">
.search-root {
    display: flex;
    flex-direction: column;
    @extend %header-padding;

    .header {
        display: flex;
        align-items: center;
        @extend %fixed-header;
        gap: 20rpx;

        &-search {
            display: flex;
            flex: 1;
            background-color: lighten($white-gray, 15%);
            padding: 10rpx 20rpx;
            border-radius: 30rpx;

            input {
                flex: 1;
                font-size: $uni-font-size-sm;
            }

            text {
                font-size: $uni-font-size-sm;
                font-weight: lighter;
                color: $gray;
            }

            image {
                @include image(s, $br: 10rpx);
            }
        }
    }

    .body {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 40rpx;

        &-ul {
            display: flex;
            flex-direction: column;
            gap: 30rpx;

            & > text {
                font-weight: bold;
            }

            &-li {
                display: flex;
                gap: 20rpx;
                align-items: center;

                &-nickname {
                    flex: 1;
                }

                &-avatar {
                    @include image($br: 10rpx)
                }

                &-operation {
                    margin-left: auto;
                    @extend %button-primary;
                    @extend %button-small;

                    &.friend {
                        @extend %button-deep-blue;
                        @extend %button-small;


                    }
                }
            }
        }
    }
}
</style>
