import path from "path";
import { UserConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni"; // ！此依赖不能安装

function resolve(dir: string) {
	return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config/

export default (): UserConfig => {
	return {
		plugins: [uni()],
		resolve: {
			alias: {
				"/@": resolve("./"),
				"/$": resolve("./pages/"),
			},
		},
	};
};
