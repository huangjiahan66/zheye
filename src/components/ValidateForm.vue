<template>
  <form>
    <slot></slot>
    <div class="submit-area">
      <slot name="submit"
        ><button class="btn btn-primary" @click.prevent="submitForm">
          提交
        </button></slot
      >
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "vue";
import mitt from "mitt";
export const emitter = mitt<Events>();
type Events = {
  "form-item-created": ValidateFunc;
};
type ValidateFunc = () => boolean;
export default defineComponent({
  emits: ["form-submit"],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];
    const submitForm = () => {
      const result = funcArr.map((func) => func()).every((result) => result);
      context.emit("form-submit", result);
    };
    const callback = (func: ValidateFunc) => {
      funcArr.push(func);
    };
    emitter.on("form-item-created", callback);
    onUnmounted(() => {
      emitter.off("form-item-created", callback);
      funcArr = [];
    });
    return {
      submitForm,
    };
  },
});
</script>

<style scoped></style>
