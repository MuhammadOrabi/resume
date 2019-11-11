@extends('layouts.app')
@section('meta-desc')
    Playground
@endsection
@section('title')
    Playground,
@endsection
@section('content')
<div class="max-w-md">
    <h1 class="text-2xl font-extrabold text-black mb-4">Playground</h1>
</div>
<div class="mt-12 spaced-y-10">
    <div>
        <p class="text-lg text-black font-bold no-underline">
            Chat Module
        </p>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            simple chat module for testing out ruby with elasticsearch and simple go command line to interact with the chat module powered by cobra.
            <ul>
                <li>
                    <div class="text-grey-darkest text-base leading-normal mt-2">
                        [<a href="https://github.com/MuhammadOrabi/ruby-elasticsearch-go" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Github Repo</a>]
                    </div>
                </li>
            </ul>
        </p>
    </div>
</div>

@endsection
