import api from '@/services/airtable.service'

export const hostAgency = {
  async getHostAgencyListForEvent (event) {
    return new Promise((resolve, reject) => {
      const allHostAgencys = []
      api('HostAgency')
        .select({
          filterByFormula: `SEARCH('${event.name}', ARRAYJOIN(event))`
        })
        .eachPage(
          function page (records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            records.forEach((record) => {
              allHostAgencys.push({
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
            resolve(allHostAgencys)
          }
        )
    })
  }
}
export default hostAgency
