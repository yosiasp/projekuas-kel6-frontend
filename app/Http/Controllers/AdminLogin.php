<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminLogin extends Controller
{
    public function index()
    {
        return view('adminLogin');
    }
}
