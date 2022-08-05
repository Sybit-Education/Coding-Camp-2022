<template>
  <n-button @click="createFile()">In Kalender speichern</n-button>
</template>

<script>
export default {
  name: 'EventCalendar',
  props: {
    event: {
      required: true
    }
  },
  methods: {
    createFile () {
      const ics = require('ics')
      var dateFormat = new Date(this.event.date)
      const event = {
        start: [
          dateFormat.getFullYear(),
          dateFormat.getMonth() + 1,
          dateFormat.getDate()
        ],
        title: this.event.name,
        description: this.event.description + '\n' +
          `Zeit: ${this.event.time} \n` +
          `${this.event.place ? `Ort: ${this.event.place}` : ''} \n` +
          `${this.event.meetingSpot ? `Treffpunkt: ${this.event.meetingSpot}` : ''} \n` +
          `${this.event.importantInfo ? `Infos: ${this.event.importantInfo}` : ''} \n` +
          `${this.event.hostPhone ? `Telefon: ${this.event.hostPhone}` : ''} \n`,
        location: this.event.place,
        url: this.event.hostWebsite,
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: 'Admin', email: this.event.hostMail }
      }

      ics.createEvent(event, (error, value) => {
        if (error) {
          console.log(error)
          return
        }
        window.open('data:text/calendar;charset=utf8,' + encodeURIComponent(value))
      })
    }
  }
}
</script>

<style></style>
