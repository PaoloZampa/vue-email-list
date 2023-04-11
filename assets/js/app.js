const { createApp } = Vue

createApp({
    data() {
        return {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emailNumber: 10,
            randomEmails: []
        }
    },
    mounted() {
        for (let i = 0; i < this.emailNumber; i++) {
            axios
                .get(this.url)
                .then(response => {
                    this.randomEmails.push(response.data.response);
                    console.log(this.randomEmails);
                })
        }
    }
}).mount('#app')