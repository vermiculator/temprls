/**
 * Island registry — single source of truth for every editable region the
 * bridge can refresh. Each entry maps a URL slug under `/tina-island/...`
 * to a fetcher + component + wrapper. Adding a new editable region = adding
 * one entry here; the dynamic `[name].ts` route picks it up automatically.
 */
import type { IslandRegistry } from '@tinacms/astro/experimental';
import type { QueryResult } from '@tinacms/astro/data';

import type { ProjectQuery, SmallWorkQuery, VignetteQuery, CategoryQuery, ThemeQuery, ConfigQuery, PageQuery } from '../../tina/__generated__/types';
import type { CmsProject, CmsSmallWork, CmsVignette, CmsCategory, CmsTheme, CmsConfig, CmsPage } from './data';
import PageBody from '../components/islands/PageBody.astro';
import ProjectBody from '../components/islands/ProjectBody.astro';
import SmallWorkBody from '../components/islands/SmallWorkBody.astro';
import VignetteBody from '../components/islands/VignetteBody.astro';
import CategoryBody from '../components/islands/CategoryBody.astro';
import ThemeBody from '../components/islands/ThemeBody.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import { getProject, getSmallWork, getVignette, getCategory, getTheme, getConfig, getPage } from './data';

export const islands: IslandRegistry = {
	page: {
		fetch: (_request, params) => getPage(params.get('slug') ?? 'home'),
		component: PageBody,
		wrapper: { tag: 'main' },
		propsFromData: (data) => ({
			data: (data as QueryResult<PageQuery>).data?.page as CmsPage | undefined,
		}),
	},
	project: {
		fetch: (_request, params) => getProject(params.get('slug') ?? ''),
		component: ProjectBody,
		wrapper: { tag: 'article' },
		propsFromData: (data) => ({
			data: (data as QueryResult<ProjectQuery>).data?.project as CmsProject | undefined,
		}),
	},
	smallWork: {
		fetch: (_request, params) => getSmallWork(params.get('slug') ?? ''),
		component: SmallWorkBody,
		wrapper: { tag: 'article' },
		propsFromData: (data) => ({
			data: (data as QueryResult<SmallWorkQuery>).data?.smallWork as CmsSmallWork | undefined,
		}),
	},
	vignette: {
		fetch: (_request, params) => getVignette(params.get('slug') ?? ''),
		component: VignetteBody,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			data: (data as QueryResult<VignetteQuery>).data?.vignette as CmsVignette | undefined,
		}),
	},
	category: {
		fetch: (_request, params) => getCategory(params.get('slug') ?? ''),
		component: CategoryBody,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			data: (data as QueryResult<CategoryQuery>).data?.category as CmsCategory | undefined,
		}),
	},
	theme: {
		fetch: (_request, params) => getTheme(params.get('slug') ?? ''),
		component: ThemeBody,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			data: (data as QueryResult<ThemeQuery>).data?.theme as CmsTheme | undefined,
		}),
	},
	global: {
		fetch: () => getConfig(),
		component: Header,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			config: (data as QueryResult<ConfigQuery>).data?.config as CmsConfig | undefined,
		}),
	},
	'global-footer': {
		fetch: () => getConfig(),
		component: Footer,
		wrapper: { tag: 'div' },
		propsFromData: (data) => ({
			config: (data as QueryResult<ConfigQuery>).data?.config as CmsConfig | undefined,
		}),
	},
};
