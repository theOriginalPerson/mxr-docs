export const SITE = {
	title: 'MXR Docs',
	description: 'An introduction to the Mohawk XR Developer stack.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/tN74CTfe`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Junior Dev Stuff': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Using Astro', link: 'en/using-astro' },
			{ text: 'Using Strapi', link: 'en/using-strapi' },
			{ text: 'Project Directory View', link: 'en/directory-view' },
			{ text: 'Making API Requests', link: 'en/api-requests' },
			{ text: 'Using Git/Github', link: 'en/using-git' },
			{ text: 'Junior Projects', link: 'en/jr-projects' },
		],
		'Senior Dev Stuff': [
			{ text: 'Introduction', link: 'en/sr-introduction' },
		]
	},
};
