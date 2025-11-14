import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-xl font-bold">CollegeBrand</div>
                <nav className="space-x-4">
                    <Link to="/university-a" className="text-sm">Univ A</Link>
                    <Link to="/university-b" className="text-sm">Univ B</Link>
                </nav>
            </div>
        </header>
    )
}