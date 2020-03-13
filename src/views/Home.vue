<template>
    <div class="home">
        <h1>云信 Web SDK Online Test</h1>
    </div>
</template>

<script>
  // @ is an alias to /src
  import SDK from '@/sdk/NIM_Web_SDK_v7.4.0';
  import HelloWorld from '@/components/HelloWorld.vue';

  export default {
    name: 'Home',
    components: {
      HelloWorld,
    },
    data() {
      return {
        appKey: '45c6af3c98409b18a84451215d0bdd6e',
        token: 'e10adc3949ba59abbe56e057f20f883e',
        account: 'greatcs4',
      };
    },
    created() {
      // 引入SDK类的引用以后，获取SDK对象实例
      window.nim = SDK.NIM.getInstance({
        // debug: true,
        appKey: this.appKey,
        account: this.account,
        token: this.token,
        onconnect: function() {
          alert('SDK 连接成功');
          // 连接成功后才能发消息
          window.nim.sendText({
            scene: 'p2p',
            to: 'account',
            text: 'hello',
            done: function sendMsgDone(msg) {
              console.log(msg)
            },
          });
        },
        ondisconnect: function(obj) {
          console.log('SDK 连接断开', obj);
        },
        onerror: function(error) {
          console.log('SDK 连接失败', error);
        },
        onmsg: function (msg) {
          // 此处为委托消息事件，消息发送成功后，成功消息也在此处处理
        },
        privateConf: {}, // 私有化部署方案所需的配置
      });
    },
    methods: {
      sendMsg() {
        const msg = window.nim.sendText({
          scene: 'p2p',
          to: 'account',
          text: 'hello',
          done: function sendMsgDone (error, msg) {
            // 此处为回调消息事件，仅仅通知开发者，消息是否发送成功
          }
        })
      }
    }
  };
</script>
