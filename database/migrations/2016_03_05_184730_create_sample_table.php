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
            $table->boolean('tasteA')->default(false);
            $table->boolean('tasteB')->default(false);
            $table->boolean('colorA')->default(false);
            $table->boolean('colorB')->default(false);
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
