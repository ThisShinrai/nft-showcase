<?php

namespace App\Http\Controllers;

use App\Models\NFT;
use Illuminate\Http\Request;

use Inertia\Inertia;
use Redirect;


class NFTController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Index', [
            'nft' => NFT::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(NFT $nFT)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(NFT $nFT)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, NFT $nFT)
    {
        $request->nft()->fill($request->validated());

        $request->nft()->save();

        return Redirect::route('/');
    }



    /**
     * Remove the specified resource from storage.
     */
    public function destroy(NFT $nFT)
    {
        //
    }
}