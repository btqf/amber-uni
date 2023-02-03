import { computed, getCurrentInstance, nextTick, onMounted } from "vue";
import { isEmpty } from "lodash";
import { router } from "@/amber";
import { onReady } from "@dcloudio/uni-app";

export function useUi(): Ui.Page {
  // 子组件方法
  let d: any;

  const ui: any = {
    get loaded() {
      return Boolean(d);
    },
  };

  const update = () => {
    d = null;
    if (!d) {
      const p = router.info();
      if (p) {
        d = p.$vm?.$am_page || p.$vm?.$root?.$am_page;
      }
    }
  };

  onReady(() => {
    update();
  });

  ["showLoading", "hideLoading", "showToast", "showTips", "showConfirm"].forEach((e) => {
    ui[e] = (...args: any[]) => {
      if (d) {
        d[e](...args);
      }
    };
  });

  return ui;
}
