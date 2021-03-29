<template lang="pug">
  main.flex-shrink-0
    .container
      .row
        .col-md-6.mx-auto.mt-5.mb-5
          .text-center
            img.img-fluid(src="~/assets/logo.png" width="250")
          .input-group.mb-3
            input.form-control(type='text' v-model="url")
            button.btn.btn-danger(:disabled="isLoading" @click.prevent="getVideo()") {{isLoading ? 'Loading...&nbsp;' : 'GET VIDEO&nbsp;'}}
              i.fas.fa-search
          .result-area(v-if="isSuccess")
            hr
            .card
              img.card-img-top(src='https://avatars.githubusercontent.com/u/50639655?v=4')
              .card-body
                h5.card-title Video title
                .card-text
                  select.form-select(aria-label='Default select example')
                    option(selected='') Please select a type
                  .d-flex.justify-content-evenly.mt-3
                    button.btn.btn-danger.btn-sm(@click.prevent="watchResult")
                      | Watch&nbsp;
                      i.fas.fa-eye
                    button.btn.btn-success.btn-sm(@click.prevent="downloadResult")
                      | Download&nbsp;
                      i.fas.fa-download
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      isSuccess: false,
      url: null
    }
  },
  methods: {
    getVideo() {
      console.log(this.url);
      this.isLoading = true
      setTimeout(() => {
        this.isSuccess = true
        this.isLoading = false
      }, 1500);
    },
    watchResult() {
      console.log("watchResult");
    },
    downloadResult() {
      console.log("downloadResult");
    }
  }
}
</script>