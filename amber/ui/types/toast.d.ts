declare namespace AMToast {
	type Options =
		| string
		| {
				icon?: string;
				image?: {
					url: string;
					mode: string;
					style?: {
						[key: string]: any;
					};
				};
				message: string;
				duration?: number;
				type?: "default" | "primary" | "success" | "error" | "warning" | "info";
				position?: "bottom" | "top" | "middle";
				onClose?(): void;
		  };

	interface Ref {
		open(options: Options): void;
	}
}