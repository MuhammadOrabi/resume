@extends('layouts.app')
@section('meta-desc')
    Projects
@endsection
@section('title')
    Projects,
@endsection
@section('content')
<div class="max-w-md">
    <h1 class="text-2xl font-extrabold text-black mb-4">Projects</h1>
</div>
<div class="mt-12 spaced-y-10">
    <div>
        <p class="text-lg text-black font-bold no-underline">
            Digital Assistant
        </p>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            simple Appointment web application between doctors and patients using nodejs, python and
            golang for the back-end. Patient can view all the available time slots of a doctor so he would be able to make
            an appointment.
            <ul>
                <li>
                    REST
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        [<a href="https://github.com/MuhammadOrabi/assessment-task" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a>]
                    </div>
                </li>
                <br>
                <li>
                    Messaging over Message Broker using RabbitMQ (under development)
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        [<a href="https://gitlab.com/digital-assistant/app" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Gitlab Repo</a>]
                    </div>
                </li>
            </ul>
        </p>
    </div>

    <div>
        <p class="text-lg text-black font-bold no-underline">
            Create Website
        </p>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            it’s like WordPress or wix, it’s an application provides create website service, what makes it
            special is that you can create not just a website or a blog you can create your own web application and it has
            some AI features.
            <ul>
                <li>
                    PHP, Laravel, Vue, Bootstrap, Material Design, Bulma, ......
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        [<a href="https://github.com/MuhammadOrabi/create-website" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a> |
                        <a href="http://create-website.orabi.me/" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Live</a>]
                    </div>
                </li>
            </ul>
        </p>
    </div>

    <div>
        <p class="text-lg text-black font-bold no-underline">
            Voting App
        </p>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            it’s a voting app, so you can register and create polls and people are allowed to vote and there is a
            data visualization for the votes.
            <ul>
                <li>
                    PHP, Laravel 5.4, Vue.Js 2.0 , Bootstrap V4
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        [<a href="https://github.com/MuhammadOrabi/voting-app" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a> |
                        <a href="http://vote.orabi.me/" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Live</a>]
                    </div>
                </li>
                <br>
                <li>
                    Bootstrap V4, Express.js, MongoDB, React.js
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        [<a href="https://github.com/MuhammadOrabi/voting-app-react" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a> |
                        <a href="http://vote.react.orabi.me/" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Live</a>]
                    </div>
                </li>
            </ul>
        </p>
    </div>
</div>

@endsection
