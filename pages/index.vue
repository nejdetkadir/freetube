<template lang="pug">
  main.flex-shrink-0
    .container
      .row
        .col-md-6.mx-auto.mt-5.mb-5
          .text-center
            img.img-fluid(src="~/assets/logo.png" width="250")
          .alert.alert-danger.text-center(v-if="isError") {{isError}}
          .input-group.mb-3
            input.form-control(type='text' v-model="url" placeholder="Paste your Youtube URL")
            button.btn.btn-danger(:disabled="isLoading" @click.prevent="getVideo()") {{isLoading ? 'LOADING...&nbsp;' : 'GET VIDEO&nbsp;'}}
              i.fas.fa-search
          .result-area(v-if="result")
            hr
            .card
              img.card-img-top(:src='result.videoDetails.thumbnails[result.videoDetails.thumbnails.length-1].url')
              .card-body
                h5.card-title {{result.videoDetails.title}}
                .card-text
                  select.form-select(v-model="selectedOption" @change="onChangeOption")
                    option(value="-1") Please select a type
                    option(v-for="(format, index) in result.formats" :key="index" :value="index") {{format.container}}({{format.mimeType.split(";")[0]}})  quality({{format.quality}})
                  .text-center.mt-3
                    .alert.alert-info.mb-2.mt-2(v-if="isChanged") You can download or {{this.result.formats[this.selectedOption].mimeType.split(";")[0].split("/")[0] == "video" ? "watch" : "listen"}} anymore! 
                    button.btn.btn-danger.btn-sm(@click.prevent="watchResult")
                      | Show&nbsp;
                      i.fas.fa-eye
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      isError: null,
      isChanged: false,
      url: null,
      result: null,
      selectedOption: '-1'
    }
  },
  methods: {
    async getVideo() {
      this.isLoading = true
      this.result = null
      try {
        const res = await this.$axios.post('/api/youtube', {url: this.url})
        if (res.data.validation) {
          this.result = res.data.result
          this.isError = null
        } else {
          this.isError = "Please check your URL"
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.isError = "There is an error :("
      }
    },
    watchResult() {
      if (this.checkOption()) {
        window.open(this.result.formats[this.selectedOption].url, '_blank').focus();
      }
    },
    checkOption() {
      if (this.selectedOption == -1) {
        this.isError = "Please select a type"
        return false
      } else {
        this.isError = null
        return true
      }
    },
    onChangeOption() {
      this.isChanged = true
    }
  }
}
</script>