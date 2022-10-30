<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class MemoSessions extends Model
{
    public function memo(): BelongsTo
    {
        return $this->belongsTo(MemoTest::class, 'memo_test_id');
    }
}