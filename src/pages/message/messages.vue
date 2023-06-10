<template>
    <view class="messages-root">
        <view class="header">
            <view class="header-avatar">
                <image src="/../../static/mock_images/aow.jpg"></image>
            </view>
            <view class="header-logo">
                <image src="../../static/message/app-icon.png"></image>
            </view>
            <view class="header-operations">
                <image src="../../static/message/search.png" @click="toSearch"></image>
                <image src="../../static/message/icon_添加.png" @click="toAdd"></image>
            </view>
        </view>
        <view class="body">
            <view class="body-message" v-for="(message,index) in messages" :key="index"
                  @click="toMessageDetail(message)">
                <message :message="message"></message>
            </view>
        </view>
    </view>
</template>

<script>
import Message from "../../components/message/message.vue";

export default {
    components: {Message},
    data() {
        return {
            messages: [
                {
                    avatar: './../../static/message/add.png',
                    name: '好友请求',
                    message: '你有2条好友请求',
                    time: '9.12',
                    messageCount: 2,
                    url: '/pages/friend-request/friend-request'
                },
                {
                    avatar: 'http://dummyimage.com/100x100',
                    name: '发信人',
                    message: '消息内容22222222222222222',
                    time: '9.12',
                    messageCount: 2,
                    url: '',
                },
                {
                    avatar: 'http://dummyimage.com/100x100',
                    name: '发信人',
                    message: '消息内容',
                    time: '9.12',
                    messageCount: 0,
                    url: ''

                },
                {
                    avatar: 'http://dummyimage.com/100x100',
                    name: '发信人',
                    message: '消息内容',
                    time: '9.12',
                    messageCount: 1,
                    url: ''

                },
                {
                    avatar: 'http://dummyimage.com/100x100',
                    name: '发信人',
                    message: '消息内容',
                    time: '9.12',
                    messageCount: 0,
                    url: ''

                },
                {
                    avatar: 'http://dummyimage.com/100x100',
                    name: '发信人',
                    message: '消息内容',
                    time: '9.12',
                    messageCount: 2,
                    url: ''

                },
                {
                    avatar: 'http://dummyimage.com/100x100',
                    name: '发信人',
                    message: '消息内容',
                    time: '9.12',
                    messageCount: 0,
                    url: ''

                },
                {
                    avatar: 'http://dummyimage.com/100x100',
                    name: '发信人',
                    message: '消息内容',
                    time: '9.12',
                    messageCount: 0,
                    url: ''

                },
            ]
        };
    },
    methods: {
        toSearch() {
            uni.navigateTo({
                url: '/pages/search/search'
            })
        },
        toAdd() {
        },
        toMessageDetail(message) {
            if (message.url && message !== '') {
                uni.navigateTo({
                    url: message.url
                })
            } else {
                uni.navigateTo({
                    url: '/pages/chat/chat'
                })
            }

        }
    },
    mounted() {
        console.log('mounted')
    },
    onLoad() {
        console.log('onload')
    },
    onPullDownRefresh() {
        // this.$http('/user/login','','GET',(res)=>{
        //     console.log(res)
        // },(err)=>{
        //     console.log(err)
        // })
        // setTimeout(function () {
        //     uni.stopPullDownRefresh();
        // }, 1000);
    }
}
</script>

<style lang="scss" scoped>
.messages-root {
    display: flex;
    flex-direction: column;
    @extend %header-padding;

    & > view {
        display: flex;
    }

    .header {
        @extend %fixed-header;
        border-bottom: 1px solid $white-gray;

        &-avatar {
            @include align($jc: start);
            flex: 1;

            image {
                @include image($br: 10rpx);
            }
        }

        &-logo {
            @include align();
            flex: 1;

            image {
                @include image($br: 10rpx);
            }
        }

        &-operations {
            flex: 1;
            margin-left: auto;
            gap: 20rpx;
            @include align($jc: flex-end);

            image {
                @include image(s);
            }
        }


    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20rpx;

        &-message {

        }


    }
}
</style>
