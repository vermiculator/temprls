/**
 * Per-collection data loaders + the data shapes they return.
 *
 * Loaders call the generated Tina client and pipe the result through
 * `requestWithMetadata()` so the editor overlay flows in when the page
 * renders inside the admin iframe and `tinaField()` has its metadata.
 *
 * Types below are pure derivations — no hand-written shapes. Each one is
 * either inferred from a loader's return type (`CmsConfig`/`CmsPage`/) 
 * or `Extract`/index-accessed off those. The Tina collection
 * is the source of truth; regen with `tinacms dev` and everything
 * downstream updates.
 */
import type { TinaRichTextContent } from '@tinacms/astro';
import { requestWithMetadata } from '@tinacms/astro/data';
import client from '../../tina/__generated__/client';

export const getConfig = () =>
	requestWithMetadata(client.queries.config({ relativePath: 'config.json' }));

export const getPage = (slug: string) =>
	requestWithMetadata(client.queries.page({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export const getProject = (slug: string) =>
	requestWithMetadata(client.queries.project({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export const getSmallWork = (slug: string) =>
	requestWithMetadata(client.queries.smallWork({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export const getVignette = (slug: string) =>
	requestWithMetadata(client.queries.vignette({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export const getCategory = (slug: string) =>
	requestWithMetadata(client.queries.category({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export const getTheme = (slug: string) =>
	requestWithMetadata(client.queries.theme({ relativePath: `${slug}.mdx` }), { priority: 'primary' });

export async function listPages() {
	const result = await client.queries.pageConnection();
	return (result.data.pageConnection.edges ?? [])
		.flatMap((edge) => (edge?.node ? [edge.node] : []));
}

export async function listProjects() {
	const result = await client.queries.projectConnection();
	return (result.data.projectConnection.edges ?? [])
		.flatMap((edge) => (edge?.node ? [edge.node] : []))
		.sort((a, b) => {
			const ad = a.showDate ? new Date(a.showDate).valueOf() : 0;
			const bd = b.showDate ? new Date(b.showDate).valueOf() : 0;
			return bd - ad;
		});
}

export async function listSmallWorks() {
	const result = await client.queries.smallWorkConnection();
	return (result.data.smallWorkConnection.edges ?? [])
		.flatMap((edge) => (edge?.node ? [edge.node] : []))
		.sort((a, b) => {
			const ad = a.showDate ? new Date(a.showDate).valueOf() : 0;
			const bd = b.showDate ? new Date(b.showDate).valueOf() : 0;
			return bd - ad;
		});
}
export async function listVignettes() {
	const result = await client.queries.vignetteConnection();
	return (result.data.vignetteConnection.edges ?? [])
		.flatMap((edge) => (edge?.node ? [edge.node] : []));
}
export async function listCategories() {
	const result = await client.queries.categoryConnection();
	return (result.data.categoryConnection.edges ?? [])
		.flatMap((edge) => (edge?.node ? [edge.node] : []));
}

export async function listThemes() {
	const result = await client.queries.themeConnection();
	return (result.data.themeConnection.edges ?? [])
		.flatMap((edge) => (edge?.node ? [edge.node] : []));
}

export type CmsConfig = Awaited<ReturnType<typeof getConfig>>['data']['config'];
export type CmsPage = Awaited<ReturnType<typeof getPage>>['data']['page'];
export type CmsProject = Awaited<ReturnType<typeof getProject>>['data']['project'];
export type CmsSmallWork = Awaited<ReturnType<typeof getSmallWork>>['data']['smallWork'];
export type CmsVignette = Awaited<ReturnType<typeof getVignette>>['data']['vignette'];
export type CmsCategory = Awaited<ReturnType<typeof getCategory>>['data']['category'];
export type CmsTheme = Awaited<ReturnType<typeof getTheme>>['data']['theme'];

export type CmsAnyPage = CmsPage | CmsProject | CmsSmallWork;
export type PageBlock = NonNullable<NonNullable<CmsAnyPage['blocks']>[number]>;
export type PageBlockTypename = PageBlock['__typename'];

export type HeroPageBlock = Extract<PageBlock, { __typename: 'PageBlocksHero' }>;
export type CalloutPageBlock = Extract<PageBlock, { __typename: 'PageBlocksCallout' }>;
export type CtaPageBlock = Extract<PageBlock, { __typename: 'PageBlocksCta' }>;
export type ImageFullPageBlock = Extract<PageBlock, { __typename: 'PageBlocksImageFull' }>;
export type ImageTextPageBlock = Extract<PageBlock, { __typename: 'PageBlocksImageText' }>;
export type ImageImagePageBlock = Extract<PageBlock, { __typename: 'PageBlocksImageImage' }>;
export type VideoFullPageBlock = Extract<PageBlock, { __typename: 'PageBlocksVideoFull' }>;

export type Action = NonNullable<NonNullable<HeroPageBlock['actions']>[number]>;
export type ImageField = NonNullable<HeroPageBlock['image']>;

export type CmsConfigNav = NonNullable<NonNullable<CmsConfig['nav']>[number]>;
export type CmsConfigContactLink = NonNullable<NonNullable<CmsConfig['contactLinks']>[number]>;
export type CmsConfigSeo = NonNullable<CmsConfig['seo']>;

/** Tina rich-text bodies are typed as `any` in the generated client; this is what `<TinaMarkdown>` expects. */
export type RichText = TinaRichTextContent;
export type RichTextPageBlock = Extract<PageBlock, { __typename: 'PageBlocksRichText' }>;