<template>
  <svg
    :class="svgClass"
    :style="styleObjectSet"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    styleObject: {
      fill: {
        type: String,
        default: "currentColor",
      },
      width: {
        default: '5em',
      },
      height: {
        default: '5em',
      }
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`;
    },
    svgClass () {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    },
    styleObjectSet () {
      const { width, height, fill } = this.styleObject
      return `width:${width};height:${height};fill:${fill}`
    }
  },
};
</script>

<style scoped>
.svg-icon {
  width: 3em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>