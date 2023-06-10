<template>
    <view class="chat-root">
        <view class="body">
            <scroll-view :enable-flex="true" :scroll-y="true" :scroll-with-animation="true" class="body-content">
                <chat-item v-for="chatItem in chatList" :chat-item="chatItem" :key="chatItem.id"
                           class="chatItem"></chat-item>
            </scroll-view>
        </view>
        <view class="footer">
            <image src="../../static/login/chat/voice.png"></image>
            <input v-model="message" @click="showSubmit=true" @blur="showSubmit=false"/>
            <image src="../../static/login/chat/emoji.png"></image>
            <image src="../../static/login/chat/file.png" v-if="!showSubmit"></image>
            <button class="footer-submit" v-else>发送</button>
        </view>

    </view>
</template>

<script>
import ChatItem from "../../components/chat-item/chat-item.vue";

export default {
    components: {ChatItem},
    data() {
        return {
            chatList: [
                {
                    id: '1',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },
                {
                    id: '2',
                    createTime: '2023-6-10',
                    userId: 'b1b0cccca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },
                {
                    id: '3',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: true
                },
                {
                    id: '4',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },
                {
                    id: '5',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb84e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },
                {
                    id: '6',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },

                {
                    id: '7',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },

                {
                    id: '8',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },

                {
                    id: '9',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63b8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: true
                },
                {
                    id: '10',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cdb8434e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },
                {
                    id: '11',
                    createTime: '2023-6-10',
                    userId: 'b1b0cc76-5cca-4f73-9c6b-63cd34e75',
                    avatar: 'http://dummyimage.com/100x100',
                    message: 'test message',
                    isShowTime: false
                },

            ],
            message: '',
            nickname: '橘喵',
            showSubmit: false

        }
    },
    methods: {
        setIsShowTime() {
            //     TODO 设置消息是否需要显示时间
            //     如果上一条消息距离当前消息超过x时间，则显示时间
        }
    },
    created() {
        uni.setNavigationBarTitle({
            title: this.nickname
        })
    }
}
</script>

<style lang="scss" scoped>
.chat-root {
    display: flex;
    flex-direction: column;
    background: $white-gray;
    min-height: 100vh;

    .body {
        flex: 1;
        padding: 30rpx 30rpx 130rpx 30rpx;

        .chatItem {
            margin-bottom: 30rpx;
        }

        &-content {
            display: flex;
            flex-direction: column;
        }
    }

    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        gap: 20rpx;
        padding: 20rpx 40rpx 40rpx 40rpx;
        background: lighten($gray, 46%);

        &-submit {
            @extend %button-base;
            @extend %button-small;
            border: none;
            background: $uni-color-success;
            color: white;
            padding: 20rpx;
            max-height: 60rpx;

        }

        input {
            flex: 1;
            background: white;
            padding: 10rpx;
            border-radius: 10rpx;
        }

        image {
            @include image(s)
        }
    }
}

</style>
