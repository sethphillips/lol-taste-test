<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Signup extends Model
{
    protected $guarded = ['id'];

    public function flavors()
    {
      return $this->hasMany('App\Flavor');
    }
}
