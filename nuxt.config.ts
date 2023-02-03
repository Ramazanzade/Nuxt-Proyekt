// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
            title: 'My Proyekt',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width , initial-scrale=1' },
                { hid: 'description', name: 'description', content: '' },
                { name: "format-detection", content: "telephone=no" },
            ],
            link: [
                {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",
                    rel: "stylesheet",
                    integrity: "sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",
                    crossorigin: "anonymous"

                },
                {href:'/assets/img/logo/ficon.png', rel:"stylesheet" },
                { href: '/assets/css/bootstrap.min.css', rel:"stylesheet"  },
                { href: '/assets/css/fontawesome-all.css' ,rel:"stylesheet"  },
                { href: '/assets/css//animate.css' ,rel:"stylesheet"  },
                { href: '/assets/css/video.min.css' ,rel:"stylesheet"  }, 
                { href: '/assets/css/slick-theme.css',rel:"stylesheet" },
                { href: '/assets/css/slick.css' ,rel:"stylesheet" },
                { href: '/assets/css/global.css' ,rel:"stylesheet" },
                { href: '/assets/css/style.css' ,rel:"stylesheet" },
                
                

                {
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js",
                    integrity: "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN",
                    crossorigin: "anonymous",
                    body: true

                },

            ],
            script :[
                {src:'/assets/js/jquery.min.js'},
                {src:'/assets/js/jquery-ui.min.js'},
                {src:'/assets/js/bootstrap.min.js'},
                {src:'/assets/js/popper.min.js'},
                {src:'/assets/js/appear.js'},
                {src:'/assets/js/slick.js'},
                {src:'/assets/js/twin.js'},
                {src:'/assets/js/wow.min.js'},
                {src:'/assets/js/knob.js'},
                {src:'/assets/js/jquery.filterizr.js'},
                {src:'/assets/js/imagesloaded.pkgd.min.js'},
                {src:'/assets/js/rbtools.min.js'},
                {src:'/assets/js/rs6.min.js'},
                {src:'/assets/js/jarallax.js'},
                {src:'/assets/js/jquery.inputarrow.js'},
                {src:'/assets/js/swiper.min.js'},
                {src:'/assets/js/jquery.counterup.min.js'},
                {src:'/assets/js/waypoints.min.js'},
                {src:'/assets/js/jquery.magnific-popup.min.js'},
                {src:'/assets/js/jquery.marquee.min.js'},
                {src:'/assets/js/script.js'},
                {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" }
                
            ]
        }
    }















})
