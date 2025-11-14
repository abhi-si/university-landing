import React, { useEffect, useState } from 'react'
import { getFees } from '../lib/api'


export default function ModalFees({ universityId, open, onClose }) {
    const [fees, setFees] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        if (!open) return
        setLoading(true)
        setError(null)
        getFees(universityId)
            .then(data => setFees(data))
            .catch(err => setError('Could not load fees'))
            .finally(() => setLoading(false))
    }, [open, universityId])


    if (!open) return null
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-xl w-full p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Course-wise Fees</h3>
                    <button onClick={onClose} className="text-gray-500">Close</button>
                </div>


                {loading && <div>Loading...</div>}
                {error && <div className="text-red-600">{error}</div>}
                {fees && (
                    <div className="space-y-3">
                        {fees.courses.map(c => (
                            <div key={c.code} className="p-3 border rounded">
                                <div className="font-medium">{c.name}</div>
                                <div className="text-sm">Fee range: {c.feeRange}</div>
                                <div className="text-sm">Duration: {c.duration}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}