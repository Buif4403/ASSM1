import React, { Component } from 'react'
export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><a ClassName='active' href='#home'>Home</a></li>
                <li><a href='#news'>News</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>
                <li><input class="autocomplete-input main-menu-search-input" placeholder="Search" type="search" role="combobox" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" aria-haspopup="listbox" aria-expanded="false" aria-owns=""></input></li>
            </ul>
        </nav>

    )
}