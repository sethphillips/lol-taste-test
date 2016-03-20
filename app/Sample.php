<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Sample extends Model
{
    public $guarded = ['id'];

    public function scopeToday($query)
    {
      return $query->where('created_at', '>',Carbon::now()->toDateString());
    }

    public function scopeRecent($query)
    {
      return $query->where('created_at', '>',Carbon::now()->subDays(5)->toDateString());
    }
}
