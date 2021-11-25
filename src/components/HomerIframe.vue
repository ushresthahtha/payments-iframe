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

       // return `http://192.168.1.173:3001/pay/${paymentId}`
      return `https://homeer-payments-tst.dev.clubhomeresponse.com.au/pay/${paymentId}`
      // return `http://192.168.1.173:3001/payment-result?errors[]=Reference+is+already+taken&iframe=1&r=96&sca_enabled=&show_email=0&show_extras=0&tokenize_only=`
    },
  },
  methods :{
    receiveMessage (event) {

      if(event.origin === 'https://homeer-payments-tst.dev.clubhomeresponse.com.au') {
      // if(event.origin === 'http://192.168.1.173:3001') {

        console.log(event.data)
        console.log(event)

      }
    }
  },
  mounted () {
    window.addEventListener('message', this.receiveMessage)
  }
}
</script>

<style scoped>

</style>
