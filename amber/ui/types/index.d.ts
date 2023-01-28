/// <reference path="./action-sheet.d.ts" />
/// <reference path="./confirm.d.ts" />
/// <reference path="./toast.d.ts" />
/// <reference path="./page.d.ts" />
/// <reference path="./pay.d.ts" />

declare namespace Ui {
	type Page = AMPage;
	type ActionSheet = AMActionSheet.Ref;
	type Confirm = AMConfirm.Ref;
	type Pay = AMPay.Ref;
	type Toast = AMToast.Ref;
}