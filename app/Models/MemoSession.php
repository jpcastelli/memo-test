<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MemoSession extends Model
{

    protected $fillable = [
        'memo_test_id'
    ];

    public function memo(): BelongsTo
    {
        return $this->belongsTo(MemoTest::class, 'memo_test_id');
    }
}