declare interface AMPage {
	loaded: boolean;
	showLoading(text?: string): void;
	hideLoading(): void;
	showToast(options: AMToast.Options): void;
	showConfirm(options: AMConfirm.Options): void;
	showTips(message: string, callback?: () => void): void;
}