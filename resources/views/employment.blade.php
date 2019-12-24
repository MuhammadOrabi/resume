@extends('layouts.app')
@section('meta-desc')
    Employment
@endsection
@section('title')
    Employment,
@endsection
@section('content')
{{-- <div class="max-w-md">
    <h1 class="text-2xl font-extrabold text-black mb-4">Employment</h1>
</div> --}}
<div class="mt-12 spaced-y-10">
    <div>
        <a href="https://www.bluecrunch.com/" class="text-lg text-black font-bold no-underline hover:underline">
            Software Engineer at BlueCrunch <small>[November 2018 - till now]</small>
        </a>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            <ul>
                <li>
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        <a href="https://botter.live" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Botter</a>
                    </div>
                    Is a chat bot platform that help with createing intelligent chat bots that supports lots of AI platforms like LUIS, WIT <br>
                    Can be integrated with Messenger, WhatsApp, Twitter and Genesys products. <br>
                    <small>built in a microservice structure using GO && NodeJS</small>
                </li>
                <br>
                <li>
                    CPA
                    <p>
                        Is a fully automated and highly optimized CPA. <br>
                        It takes in transactions, categorization, and context from previous years to automate your books & taxes moving forward. <br>
                        <small>built in a microservice structure, and we used gRPC mainly</small>
                    </p>
                </li>
                <br>
                <li>
                    Building APIs for mobile applications && web platforms.
                    (i.e)
                    <ul>
                        <li>Feed</li>
                        <li>Toyota</li>
                        <li>Loreal (medical)</li>
                    </ul>
                </li>
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
