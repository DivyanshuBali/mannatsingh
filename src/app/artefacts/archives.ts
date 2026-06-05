export type Tag = {
	id: string;
	name: string;
	[key: string]: unknown;
};

export type ArtefactsItem = {
	id: string;
	title: string;
	code: string;
	year: string;
	bannerImage: string;
	images: string[];
	description: string[];
	tags: Tag[];
};
