<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function home()
    {
        return view('welcome');
    }

    public function education()
    {
        return view('education');
    }

    public function employment()
    {
        return view('employment');
    }

    public function skills()
    {
        return view('skills');
    }

    public function projects()
    {
        return view('projects');
    }

    public function playground()
    {
        return view('playground');
    }
}
