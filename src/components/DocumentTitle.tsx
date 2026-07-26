import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL, SOCIAL_IMAGE } from '../config/site';

type DocumentTitleProps = {
  title: string;
  description?: string;
  noIndex?: boolean;
};

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function DocumentTitle({ title, description = DEFAULT_DESCRIPTION, noIndex = false }: DocumentTitleProps) {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = new URL(location.pathname === '/' ? '/' : location.pathname, SITE_URL).toString();
    const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';

    document.title = fullTitle;
    document.documentElement.lang = 'en-ZA';
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', robots);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', SOCIAL_IMAGE);
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', SOCIAL_IMAGE);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, location.pathname, noIndex, title]);

  return null;
}
