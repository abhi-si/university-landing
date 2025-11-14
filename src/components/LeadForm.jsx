import React, { useState } from 'react'
import { submitLead } from "../lib/api";



export default function LeadForm({ universityId }) {
    const [form, setForm] = useState({ fullName: '', email: '', phone: '', state: '', course: '', intake: '', consent: false })
    const [status, setStatus] = useState({ loading: false, message: '', error: false })


    function onChange(e) {
        const { name, value, type, checked } = e.target
        setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    }


    function validate() {
        if (!form.fullName) return 'Enter full name'
        if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Enter valid email'
        if (!/^\d{10}$/.test(form.phone)) return 'Enter 10-digit phone (India)'
        if (!form.state) return 'Select state'
        if (!form.course) return 'Select course'
        if (!form.intake) return 'Select intake year'
        if (!form.consent) return 'Consent required'
        return null
    }


    async function handleSubmit(e) {
        e.preventDefault()
        const v = validate()
        if (v) { setStatus({ loading: false, message: v, error: true }); return }
        setStatus({ loading: true, message: '', error: false })


        try {
            const payload = { ...form, universityId, submittedAt: new Date().toISOString() }
            await submitLead(payload)
            setStatus({ loading: false, message: 'Lead submitted — we will contact you', error: false })
            setForm({ fullName: '', email: '', phone: '', state: '', course: '', intake: '', consent: false })
        } catch (err) {
            setStatus({ loading: false, message: 'Submission failed — try again later', error: true })
        }
    }


    return (
        <form onSubmit={handleSubmit} className="space-y-3 max-w-md">
            <input name="fullName" value={form.fullName} onChange={onChange} placeholder="Full name" className="w-full p-2 border rounded" />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="w-full p-2 border rounded" />
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (10-digit)" className="w-full p-2 border rounded" />
            <input name="state" value={form.state} onChange={onChange} placeholder="State" className="w-full p-2 border rounded" />
            <input name="course" value={form.course} onChange={onChange} placeholder="Course Interested" className="w-full p-2 border rounded" />
            <input name="intake" value={form.intake} onChange={onChange} placeholder="Intake Year" className="w-full p-2 border rounded" />
            <label className="flex items-center space-x-2"><input type="checkbox" name="consent" checked={form.consent} onChange={onChange} /> <span className="text-sm">I consent to be contacted</span></label>


            <div className="flex items-center space-x-2">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded" disabled={status.loading}>{status.loading ? 'Sending...' : 'Apply Now'}</button>
            </div>


            {status.message && (
                <div className={`p-2 rounded ${status.error ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>{status.message}</div>
            )}
        </form>
    )
}