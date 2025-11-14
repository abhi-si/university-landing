import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CourseCard from '../components/CourseCard'
import LeadForm from '../components/LeadForm'
import ModalFees from '../components/ModalFees'

const UNIVERSITY_ID = 'univ-a'

export default function UniversityA() {
    const [isFeesOpen, setFeesOpen] = useState(false)
    const [selectedUniversityId, setSelectedUniversityId] = useState(null)

    // sample static courses for quick rendering; production should load from API
    const courses = [
        { name: 'BBA', duration: '3 years', avgFees: '₹1.5L/yr' },
        { name: 'MBA', duration: '2 years', avgFees: '₹3L/yr' }
    ]

    const openFeesModal = () => {
        setSelectedUniversityId(UNIVERSITY_ID)   // ✅ set ID only here
        setFeesOpen(true)
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="max-w-6xl mx-auto px-4 py-8 flex-1">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h1 className="text-3xl font-bold">University A</h1>
                        <p className="mt-3 text-gray-700">
                            University A is a well-established institution known for its strong academic culture and student-focused environment. With modern classrooms, experienced faculty, and active campus life, it offers a supportive atmosphere for students to learn and grow. The university emphasizes practical learning, industry exposure, and personal development, helping students build solid foundations for their careers.
                        </p>

                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Courses</h3>
                            <div className="grid sm:grid-cols-2 gap-4 mt-3">
                                {courses.map(c => <CourseCard key={c.name} course={c} />)}
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                onClick={openFeesModal}
                                className="px-4 py-2 border rounded"
                            >
                                Check Course-wise Fees
                            </button>

                            <a className="ml-3 px-4 py-2 bg-gray-100 rounded">
                                Download Brochure
                            </a>
                        </div>
                    </div>

                    <aside className="p-4 border rounded">
                        <h4 className="font-semibold mb-2">Apply / Get Info</h4>
                        <LeadForm universityId={UNIVERSITY_ID} />
                    </aside>
                </div>
            </main>

            <Footer />

            {/* ✅ Only pass ID when modal opens */}
            <ModalFees
                universityId={selectedUniversityId}
                open={isFeesOpen}
                onClose={() => setFeesOpen(false)}
            />
        </div>
    )
}
