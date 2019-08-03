@extends('layouts.app')
@section('meta-desc')
    Education
@endsection
@section('title')
    Education,
@endsection
@section('content')
<div class="max-w-md">
    <h1 class="text-2xl font-extrabold text-black mb-4">Education</h1>
</div>
<div class="mt-12 spaced-y-10">
    <div>
        <a href="http://sha.edu.eg/" class="text-lg text-black font-bold no-underline hover:underline">
            El-Shorouk Academy <small>[2014 - 2018]</small>
        </a>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            I'm Computer Science graduate.
        </p>
    </div>
    <div>
        <a href="https://www.freecodecamp.org/" class="text-lg text-black font-bold no-underline hover:underline">
            FreeCodeCamp
        </a>
        <p class="text-grey-darkest text-base leading-normal mt-1">
            Full stack web developer
        </p>
        <div class="text-grey-darkest text-base leading-normal mt-2">
            <a href="https://www.freecodecamp.org/muhammadorabi" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Profile</a>
            <a href="https://www.freecodecamp.org/certification/muhammadorabi/legacy-front-end" target="__blank" class="text-grey-darker hover:text-black text-sm no-underline hover:underline">Certificate</a>
        </div>

    </div>
</div>

@endsection
