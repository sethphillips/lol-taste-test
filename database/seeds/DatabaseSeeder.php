<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
    }
}

class UsersTableSeeder extends Seeder
{
  public function run()
  {
    User::create([
      'name'=>'admin',
      'email' => 'admin',
      'password' => bcrypt('exhibitpartners'),
    ]);
  }
}
