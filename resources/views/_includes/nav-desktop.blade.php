<a href="/employment" class="{{
         request()->path() == 'employment' ?
         'block text-black font-bold no-underline' : 'text-grey-dark font-semibold no-underline hover:text-black'
    }}">
    Employment
</a>
<a href="/education" class="{{
    request()->path() == 'education' ?
    'block text-black font-bold no-underline' : 'text-grey-dark font-semibold no-underline hover:text-black'
}}">Education</a>
<a href="/skills" class="{{
    request()->path() == 'skills' ?
    'block text-black font-bold no-underline' : 'text-grey-dark font-semibold no-underline hover:text-black'
}}">Skills</a>
<a href="/projects" class="{{
    request()->path() == 'projects' ?
    'block text-black font-bold no-underline' : 'text-grey-dark font-semibold no-underline hover:text-black'
}}">Projects</a>
<a href="/playground" class="{{
    request()->path() == 'playground' ?
    'block text-black font-bold no-underline' : 'text-grey-dark font-semibold no-underline hover:text-black'
}}">Playground</a>
