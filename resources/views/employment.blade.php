@extends('layouts.app')
@section('meta-desc')
    Employment
@endsection
@section('title')
    Employment,
@endsection
@section('content')
<div class="max-w-md">
    <h1 class="text-2xl font-extrabold text-black mb-4">Employment</h1>
</div>
<div class="mt-12 spaced-y-10">
    <div>
        <a href="https://www.bluecrunch.com/" class="text-lg text-black font-bold no-underline hover:underline">
            Software Engineer at BlueCrunch <small>[November 2018 - till now]</small>
        </a>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            <ul>
                <li>
                    Working on a chat bot platform that helps organizations to create intelligent
                    chat bot, that integrate with messenger, whatsapp and genesys.
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        <a href="https://botter.live" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Botter</a>
                    </div>
                </li>
                <br>
                <li>Building APIs for mobile applications.</li>
            </ul>
        </p>
    </div>

    <div>
        <a href="https://www.quadrantme.com/" class="text-lg text-black font-bold no-underline hover:underline">
            Software Engineer at Quadrant ME <small>[March 2018 - October 2018]</small>
        </a>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            <ul>
                <li>Unit and Browser testing, using PHPUnit and Laravel Dusk.</li><br>
                <li>Building messenger chat bot for qarenhom.com.</li>
                <div class="text-grey-darkest text-base leading-normal mt-2">
                    <a href="https://www.qarenhom.com" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Qarenhom</a>
                </div>
            </ul>
        </p>
    </div>

    <div>
        <a href="https://bassmat.com/" class="text-lg text-black font-bold no-underline hover:underline">
            Backend Developer at Bassmat <small>[March 2017]</small>
        </a>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            <ul>
                <li>Building APIs</li>
            </ul>
        </p>
    </div>
</div>

@endsection
