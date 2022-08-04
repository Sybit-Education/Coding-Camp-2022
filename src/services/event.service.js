import api from '@/services/airtable.service'

export const eventService = {
  async getList () {
    return new Promise((resolve, reject) => {
      const allEvents = []
      api('Event')
        .select({
          view: 'future_events',
          sort: [{
            field: 'date',
            direction: 'asc'
          }]
        })
        .eachPage(
          function page (records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            records.forEach((record) => {
              allEvents.push({
                id: record.id,
                ...record.fields,
                creationTime: record?._rawJson?.createdTime
              })
            })
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage()
          },
          function done (err) {
            if (err) {
              console.error(err)
              reject(err)
            }
            resolve(allEvents)
          }
        )
    })
  }
}
export default eventService
