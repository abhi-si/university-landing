export default function CourseCard({ course }) {
    return (
        <div className="border rounded p-4">
            <h4 className="font-semibold">{course.name}</h4>
            <p className="text-sm">Duration: {course.duration}</p>
            <p className="text-sm">Avg Fees: {course.avgFees}</p>
        </div>
    )
}