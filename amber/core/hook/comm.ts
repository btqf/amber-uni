import { ref, onBeforeUpdate } from "vue";
import { useUi } from "../../ui";
import { router } from "../router";

export function useRefs() {
  const refs = ref<any>({});
  onBeforeUpdate(() => {
    refs.value = {};
  });
  const setRefs = (index: string) => (el: any) => {
    refs.value[index] = el;
  };
  return {
    refs,
    setRefs,
  };
}

export function useAmber() {
  const { refs, setRefs } = useRefs();

  // 全局组件
  const ui = useUi();

  return {
    refs,
    setRefs,
    ui,
    router,
  };
}