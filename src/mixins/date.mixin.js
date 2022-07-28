export const DateMixin = {
  methods: {
    formatDate (date, format) {
      const d = Date.parse(date)
      const formatter = new Intl.DateTimeFormat(format || 'de', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour12: true,
        timeZone: 'UTC'
      })
      return formatter.format(d)
    }
  }
}
