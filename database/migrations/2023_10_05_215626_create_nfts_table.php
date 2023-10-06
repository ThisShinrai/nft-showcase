<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNftsTable extends Migration
{
    public function up()
    {
        Schema::create('nfts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image_url');
            $table->text('description');
            $table->float('price');
            $table->unsignedBigInteger('category_id');
            $table->timestamps();
            $table->unsignedBigInteger('user_id')->nullable();
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        // Füge einige Testdaten für die Kategorien hinzu
        DB::table('categories')->insert([
            ['name' => 'Kategorie 1'],
            ['name' => 'Kategorie 2'],
        ]);
    }

    public function down()
    {
        Schema::dropIfExists('nfts');
        Schema::dropIfExists('categories');
    }
}