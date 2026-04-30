export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

export const GA_EVENTS = {
  ENQUIRY_SUBMITTED: 'enquiry_submitted',
  CATALOGUE_DOWNLOADED: 'catalogue_downloaded',
  SAMPLE_REQUESTED: 'sample_requested',
  ACCOUNT_CREATED: 'account_created',
  WHATSAPP_CLICKED: 'whatsapp_clicked',
  PRODUCT_VIEWED: 'product_viewed',
  COUNTRY_PAGE_VIEWED: 'country_page_viewed',
}
