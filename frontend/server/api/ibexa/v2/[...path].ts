export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const url = getRequestURL(event)
  const target = `${config.ibexaInternalUrl}${url.pathname}${url.search}`

  return proxyRequest(event, target, {
    headers: {
      accept: getHeader(event, 'accept') || 'application/json'
    }
  })
})
