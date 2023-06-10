<template>
    <view class="contact-root">
        <view class="header">
            <view class="header-search">
                <image class="icon" src="../../static/message/search.png"></image>
                <text class="text">搜索</text>
            </view>
            <view class="header-li">
                <text>新朋友</text>
                <image src="../../static/contact/left.png"></image>
            </view>
            <view class="header-li">
                <text>群通知</text>
                <image src="../../static/contact/left.png"></image>
            </view>
        </view>
        <view class="body">
            <view class="body-tabs">
                <view>
                    <text :class="{selected:true}">好友</text>
                </view>
                <view>
                    <text>分组</text>
                </view>
                <view>
                    <text>群聊</text>
                </view>
                <view>
                    <text>设备</text>
                </view>
                <view>
                    <text>通讯录</text>
                </view>
                <view>
                    <text>订阅号</text>
                </view>
            </view>
            <view class="body-friends">
                <view class="friend" v-for="friend in friends" :key="friend.id">
                    <image class="friend-avatar" :src="friend.avatar"></image>
                    <view class="friend-right">
                        <text class="nickname">{{ friend.nickname }}</text>
                        <text class="description">{{ friend.description }}</text>
                    </view>
                </view>
            </view>
        </view>

    </view>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: '1',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '橘喵',
                    description: '喵呜~'
                },
                {
                    id: '2',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '咕咕',
                    description: '我要睡觉！'
                },
                {
                    id: '3',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '大黑',
                    description: '(打哈欠)'
                },
                {
                    id: '4',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '骨头',
                    description: '这个人很懒，什么也没有留下'
                },
                {
                    id: '5',
                    avatar: 'http://dummyimage.com/100x100',
                    nickname: '蓝尾',
                    description: '什么时候放假？'
                },
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
.contact-root {
    display: flex;
    flex-direction: column;
    padding: 20rpx;
    gap: 40rpx;
    height: 100vh;

    .header {
        display: flex;
        flex-direction: column;
        gap: 20rpx;
        background: white;

        &-search {
            display: flex;
            justify-content: center;
            align-items: center;
            background: lighten($white-gray, 10%);
            font-size: $uni-font-size-sm;
            padding: 20rpx;
            color: $gray;
            gap: 10rpx;

            .icon {
                @include image(40rpx)
            }
        }

        &-li {
            display: flex;
            padding: 20rpx;

            image {
                @include image(s);
                margin-left: auto;
            }
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        gap: 30rpx;

        &-tabs {
            display: flex;

            & > view {
                flex: 1;
                display: flex;
                justify-content: center;
                font-size: $uni-font-size-sm;

                text {
                    &.selected {
                        position: relative;

                        &::before {
                            content: '';
                            position: absolute;
                            background: $blue;
                            height: 6rpx;
                            left: -5rpx;
                            right: -5rpx;
                            bottom: -10rpx;
                            border-radius: 10rpx;
                        }
                    }
                }


            }
        }

        &-friends {
            display: flex;
            flex-direction: column;
            gap: 20rpx;

            .friend {
                display: flex;
                align-items: center;
                gap: 10rpx;

                .friend-right {
                    display: flex;
                    flex-direction: column;
                    gap: 5rpx;

                    text {
                        font-size: $uni-font-size-sm;
                    }

                    .description {
                        font-weight: lighter;
                        color: $gray;
                    }
                }

            }


            image {
                @include image(m);
            }
        }
    }
}
</style>
