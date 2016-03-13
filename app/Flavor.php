<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Flavor extends Model
{
    protected $guarded = ['id'];

    public function signup()
    {
      return $this->hasOne('App\Signup');
    }
}
