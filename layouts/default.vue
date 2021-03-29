<template lang="pug">
  .div
    header
      #navbarHeader.collapse.bg-dark
        .container
          .row
            .col-sm-8.col-md-7.py-4
              h4.text-white What is this?
              p.text-muted You can download or watch without ads for free any video from Youtube anymore!
            .col-sm-4.offset-md-1.py-4
              h4.text-white Nejdet Kadir Bektaş
              ul.list-unstyled
                li
                  a.text-white(href='https://github.com/nejdetkadir' target="_blank") Show on Github
                li
                  a.text-white(href='https://www.linkedin.com/in/nejdetkadir/' target="_blank") Show on Linkedin
      .navbar.navbar-dark.bg-dark.shadow-sm
        .container
          nuxt-link(to="/" class="navbar-brand d-flex align-items-center")
            strong FREETUBE
          button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarHeader' aria-controls='navbarHeader' aria-expanded='false' aria-label='Toggle navigation')
            span.navbar-toggler-icon
    Nuxt
</template>