<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="description" content="Muhammad Orabi, Software Engineer @yield('meta-desc')">
        <meta name="robots" content="index, follow" />
        <title>@yield('title') Muhammad Orabi</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="css/app.css" rel="stylesheet">
        <link rel="stylesheet" href="/css/site.css">
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css">

    </head>
    <body class="font-sans text-black leading-tight antialiased">
        <div id="app" class="py-8 lg:py-16 px-6 md:px-16 lg:px-24">
            <div class="relative z-20 flex justify-between items-center">
                <div class="flex md:block lg:flex items-center max-w-full">
                    <div class="mb-0 md:mb-4 lg:mb-0 flex flex-no-shrink pr-4 md:pr-6 lg:pr-12">
                        <a href="/" class="flex items-center no-underline">
                            <img class="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full" src="https://avatars2.githubusercontent.com/u/19597717?s=460&v=4" alt="Muhammad Orabi">
                        </a>
                    </div>
                    <div>
                        <a href="/" class="block text-black no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">Muhammad Orabi</a>
                        <div class="hidden md:flex mt-3 lg:mt-4 uppercase tracking-wide text-xs spaced-x-6">
                            @include('_includes.nav-desktop')
                        </div>
                    </div>
                </div>
                <div class="block md:hidden">
                    <button class="block" @click="toggleMenu">
                        <svg style="display: block;" :class="menuOpen ? 'hidden' : 'block'" class="block text-black h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        <svg style="display: none;" :class="menuOpen ? 'block' : 'hidden'" class="text-black h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
                    </button>
                </div>
            </div>
            <div style="display: none;" :class="menuOpen ? 'block' : 'hidden'" class="md:hidden z-10 bg-white fixed pin pt-24">
                <div class="spaced-y-8 overflow-y-auto pt-6 pb-8 px-12 max-h-full overflow-y-auto">
                    @include('_includes.nav-mobile')
                </div>
            </div>
            <div class="lg:pl-32 mt-12">
                <div class="max-w-md">
                    @yield('content')
                </div>
            </div>
          </div>

        <script src="js/app.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.8.2/js/all.js" integrity="sha384-DJ25uNYET2XCl5ZF++U8eNxPWqcKohUUBUpKGlNLMchM7q4Wjg2CUpjHLaL8yYPH" crossorigin="anonymous"></script>
        <script>
            new Vue({
                el: '#app',
                data: {
                menuOpen: false
                },
                methods: {
                toggleMenu: function () {
                    if (this.menuOpen) {
                    this.menuOpen = false
                    document.body.classList.remove('scrolling-auto', 'overflow-hidden', 'fixed', 'pin-x')
                    } else {
                    this.menuOpen = true
                    document.body.classList.add('scrolling-auto', 'overflow-hidden', 'fixed', 'pin-x')
                    }
                }
                }
            })
        </script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145575063-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-145575063-1');
        </script>
    </body>
</html>
