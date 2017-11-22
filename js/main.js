var taskApp = new Vue({
  el: '#taskApp',

  data: {
    tasks: [
      {
        name: `You can't input the protocol without calculating the mobile RSS protocol!`,
        read: false
      },
      {
        name: `connecting the system won't do anything, we need to input the mobile AI panel!`,
        read: false
      },
      {
        name: `Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!`,
        read: false
      },
      {
        name: `We need to program the primary TCP hard drive!`,
        read: false
      },
      {
        name: `If we override the interface, we can get to the HTTP feed through the virtual EXE interface!`,
        read: false
      },
      {
        name: `We need to back up the wireless GB driver!`,
        read: false
      },
      {
        name: `We need to index the mobile PCI bus!`,
        read: false
      },
      {
        name: `If we connect the sensor, we can get to the HDD port through the redundant IB firewall!`,
        read: false
      }
    ]
  },

  methods: {
    addTask: function(event) {
      event.preventDefault()
      this.tasks.push({
        name: this.tasks.name,
        read: false
      });
    },
    deleteItem: function(task){
      // console.log(this.tasks.indexOf(task))
      this.tasks.splice(this.tasks.indexOf(task), 1)
    }
  }
})
