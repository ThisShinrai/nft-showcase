<?php

namespace Database\Seeders;

use App\Models\NFT;
use Illuminate\Database\Seeder;

class nft_seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Erstelle 10 neue NFTs
        for ($i = 0; $i < 10; $i++) {
            $nft = new NFT();
            $nft->name = "NFT $i";
            $nft->description = "Ein Beispiel-NFT";
            $nft->image_url = "img/1 (" . $i + 1 . ").png";
            $nft->price = $i + 123;
            $nft->category_id = rand(1, 2);
            $nft->save();
        }
    }
}