<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSampleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('samples',function(Blueprint $table){
            $table->increments('id');
            $table->boolean('boldA')->default(false);
            $table->boolean('boldB')->default(false);
            $table->boolean('boldC')->default(false);
            $table->boolean('cheddarA')->default(false);
            $table->boolean('cheddarB')->default(false);
            $table->boolean('cheddarC')->default(false);
            $table->boolean('mouthfeelA')->default(false);
            $table->boolean('mouthfeelB')->default(false);
            $table->boolean('mouthfeelC')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('samples');
    }
}
