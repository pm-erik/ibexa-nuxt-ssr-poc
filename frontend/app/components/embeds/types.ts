export interface ContentSummary {
  id: number
  locationId: number
  name: string
  contentTypeIdentifier: string
  url: string | null
  data?: Record<string, unknown> | null
}
