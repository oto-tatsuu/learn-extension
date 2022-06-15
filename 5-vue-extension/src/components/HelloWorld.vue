<template>
  <div>
    <input ref="input" type="text" @change="handleChange(event)" />
    <button @click="handleClick">send</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function () {
    return {
      text: "",
    };
  },
  methods: {
    handleClick() {
      let text = this.text;
      console.log(text)
      chrome.tabs
        .query({ active: true, currentWindow: true })
        .then(function (tabs) {
          chrome.tabs
            .sendMessage(tabs[0].id, { id: "popup", message: text })
            .then(function (response) {
              console.log(response);
            });
        });
    },
    handleChange() {
      console.log(this.$refs.input.value)
      this.text = this.$refs.input.value;
    }
  },
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
};
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
