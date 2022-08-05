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
          dateFormat.getMonth(),
          dateFormat.getDay(),
          6,
          30
        ],
        duration: { hours: 6, minutes: 30 },
        title: this.event.name,
        description: this.event.description,
        location: this.event.location,
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
        window.open('data:text/calendar;charset=utf8,' + value)
      })
    }
  }
}
</script>

<style></style>
