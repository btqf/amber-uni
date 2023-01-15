module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	parser: "vue-eslint-parser",
	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["vue", "@typescript-eslint", "prettier"],
	rules: {
		"no-var": "error",
		allowEmptyCatch: "off",
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				tabWidth: 2,
			},
		],
		"@typescript-eslint/no-unused-vars": "error",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"no-async-promise-executor": "off",
		"no-extra-boolean-cast": "off",
		// 针对模版中未使用的变量
		"vue/no-unused-vars": [
			"error",
			{
				ignorePattern: "^_",
			},
		],
	},
	globals: {
		defineProps: "readonly",
		defineEmits: "readonly",
		defineExpose: "readonly",
		withDefaults: "readonly",
		uni: true,
		wx: true,
		AnyObject: "readonly",
		Arrayable: "readonly",
		CarouselItem: "readonly",
		TabBarItem: "readonly",
		WechatMiniprogram: "readonly",
		UniApp: "readonly",
	},
};
