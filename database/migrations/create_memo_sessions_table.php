<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('memo_sessions', function (Blueprint $table) {
            $table->id('id');
            $table->string('memo_test_id');
            $table->integer('retries')->default(0);
            $table->integer('number_of_pairs')->default(0);
            $table->enum('state', ['Started', 'Completed'])->default('Started');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('memo_sessions');
    }
};