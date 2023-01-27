<template>
  <div class="badge">
    <div class="badge__wrapper t-14 font-1 t-uppercase t-semibold">
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
          <path id="circle"
            d="
              M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0"/>
        </defs>
        <text>
          <textPath xlink:href="#circle">
            {{ text }}
          </textPath>
        </text>
      </svg>

      <img src="/svg/logo-white-icon.svg" alt="logo">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "let's discuss ⸱ let's discuss ⸱"
    }
  },
  props: {

  },
  methods: {

  },
  mounted() {
  }
}
</script>


<style lang="scss" scoped>
  .badge {
    width: rvw(220);
    height: rvw(220);
    border-radius: 50%;
    background-color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    svg {
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
      position: absolute;
      -webkit-animation: rotating 10s linear infinite;
      -moz-animation: rotating 10s linear infinite;
      -ms-animation: rotating 10s linear infinite;
      -o-animation: rotating 10s linear infinite;
      animation: rotating 10s linear infinite;

      @-webkit-keyframes rotating /* Safari and Chrome */ {
        from {
          -webkit-transform: translate(-50%, -50%) rotate(0deg);
          -o-transform: translate(-50%, -50%) rotate(0deg);
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          -webkit-transform: translate(-50%, -50%) rotate(360deg);
          -o-transform: translate(-50%, -50%) rotate(360deg);
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
      @keyframes rotating {
        from {
          -ms-transform: translate(-50%, -50%) rotate(0deg);
          -moz-transform: translate(-50%, -50%) rotate(0deg);
          -webkit-transform: translate(-50%, -50%) rotate(0deg);
          -o-transform: translate(-50%, -50%) rotate(0deg);
          transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
          -ms-transform: translate(-50%, -50%) rotate(360deg);
          -moz-transform: translate(-50%, -50%) rotate(360deg);
          -webkit-transform: translate(-50%, -50%) rotate(360deg);
          -o-transform: translate(-50%, -50%) rotate(360deg);
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    }

    &__wrapper {
      width: rvw(120);
      height: rvw(120);
      border-radius: 50%;
      background-color: $secondary;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: rvw(60);
      }
    }
  }
</style>
