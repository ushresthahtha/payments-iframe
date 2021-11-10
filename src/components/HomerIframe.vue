<template>
  <iframe
      title="fatZebra"
      allowpaymentrequest="true"
      marginWidth="50"
      scrolling="no"
      frameBorder="0"
      height="750"
      :src='getUrl'
      width="700"
      id="myIframe"
  />

</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'HomerIframe',
  data(){
    return{
      redirectUrl : ''
    }
  },

  computed:{
    getUrl() {
      const route = useRoute()

      const paymentId = route.query.id;

      return `https://homeer-ujjwol.dev.clubhomeresponse.com.au/payments/${paymentId}`
    },
  },
  methods :{
    receiveMessage (event) {

      if(event.origin === 'https://homeer-ujjwol.dev.clubhomeresponse.com.au') {

        document.getElementById('myIframe').src = event.data.redirectUrl

      }
    }
  },
  mounted () {
    // window.addEventListener('message', this.receiveMessage)
  }
}
</script>

<style scoped>

</style>
