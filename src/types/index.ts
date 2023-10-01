export type BaseError = {
	content: string | Array<string>;
	type: number;
};

export type BaseResponse = {
	content: null | object;
	error: BaseError
} | null;
