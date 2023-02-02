<template>
  <div class="debug">
    <pre v-html="debugString" />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        debugString : null
      }
    },
    props: {
      debug : String
    },
    async mounted() {
      this.debugString = JSON.stringify(this.debug, undefined, 4);
      this.debugString = this.syntaxHighlight(this.debugString)
      // console.log(this.debugString)
    },
    methods: {

     syntaxHighlight(json) {
        if (typeof json != 'string') {
          json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
          var cls = 'number';
          if (/^"/.test(match)) {
            if (/:$/.test(match)) {
              cls = 'key';
            } else {
              cls = 'string';
            }
          } else if (/true|false/.test(match)) {
            cls = 'boolean';
          } else if (/null/.test(match)) {
            cls = 'null';
          }
          return '<span class="' + cls + '">' + match + '</span>';
        });
      }
    }
  }

</script>

<style scoped>
  .debug {
    z-index: 9999999999999;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    color: #000;
    padding: 10px;
    max-width: 500px;
    overflow: scroll;
  }
  .debug >>> .string { color: green; }
  .debug >>> .number { color: darkorange; }
  .debug >>> .boolean { color: blue; }
  .debug >>> .null { color: magenta; }
  .debug >>> .key { color: red; }

</style>
