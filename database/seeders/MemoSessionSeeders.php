<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\MemoSession;
use File;

class MemoSessionSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MemoSession::truncate();
  
        $json = File::get("database/data/MemoSessions.json");
        $memoTests = json_decode($json);
  
        foreach ($memoTests as $key => $value) {
            MemoSession::create([
                "memo_test_id" => $value->memo_test_id,
                "retries" => $value->retries,
                "number_of_pairs" => $value->number_of_pairs,
                "state" => $value->state
            ]);
        }
    }
}
