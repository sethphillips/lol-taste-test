<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFlavorTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flavors',function(Blueprint $table){
            $table->increments('id');
            $table->string('name')->nullable();
            $table->string('sub')->nullable();
            $table->string('number')->nullable();
            $table->string('size')->nullable();
            $table->integer('signup_id')->unsigned();
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
        Schema::drop('flavors');
    }
}
