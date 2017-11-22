var taskApp = new Vue({
  el: '#taskApp',

  data: {
    tasks: [
      {
        name: `You can't input the protocol without calculating the mobile RSS protocol!`
      },
      {
        name: `connecting the system won't do anything, we need to input the mobile AI panel!`
      },
      {
        name: `Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!`
      },
      {
        name: `We need to program the primary TCP hard drive!`
      },
      {
        name: `If we override the interface, we can get to the HTTP feed through the virtual EXE interface!`
      },
      {
        name: `We need to back up the wireless GB driver!`
      },
      {
        name: `We need to index the mobile PCI bus!`
      },
      {
        name: `If we connect the sensor, we can get to the HDD port through the redundant IB firewall!`
      }
    ]
  },

  methods: {
    addTask: function(event) {
      event.preventDefault()
      this.tasks.push({
        name: this.tasks.name
      });
    }
  }
})
