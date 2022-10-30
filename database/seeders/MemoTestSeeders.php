<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MemoTest;
use File;

class MemoTestSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MemoTest::truncate();
  
        $json = File::get("database/data/MemoTests.json");
        $memoTests = json_decode($json);
  
        foreach ($memoTests as $key => $value) {
            MemoTest::create([
                "name" => $value->name,
                "images" => $value->images
            ]);
        }
    }
}
