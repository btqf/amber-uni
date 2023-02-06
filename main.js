import { createSSRApp } from "vue";
import App from "./App.vue";
import { bootstrap } from "./amber";

export function createApp() {
  const app = createSSRApp(App);

  // 启动
  bootstrap(app);

  return {
    app,
  };
}
