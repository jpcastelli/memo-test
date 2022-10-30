<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class MemoTest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    protected $casts = [
        'images' => 'array'
    ];

    public function sessions(): HasMany
    {
        return $this->hasMany(MemoSession::class, 'memo_test_id');
    }
}
