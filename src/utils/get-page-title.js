import defaultSettings from '@/settings'

const title = defaultSettings.title || "Kevin Liu's Demo"

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
