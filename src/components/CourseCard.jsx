import { Link } from 'react-router-dom'
// course: {
//     "id": 1,
//     "title": "VPM",
//     "code": "ECO332",
//     "instructors": {
//         "Dr Pankaj Vajpayee": 5
//     },
//     "institute": "IIITD",
//     "avg_rating": 5,
//     "avg_difficulty": null,
//     "avg_workload": 2.5,
//     "avg_class_size": 2,
//     "avg_grade": 8.5
// }

export default ({ course }) => {
    return (
        <div className="px-10 py-6 bg-primary-600 rounded-lg shadow-lg dark:bg-primary">
            <div className="flex justify-between divide-x text-primary-50">
                <div className="flex-1 flex-col px-3">

                    <h3 className="text-2xl font-bold">
                        {course.name}
                    </h3>

                    <div className="flex flex-row -ml-2 divide-x-2 divide-primary-300">
                        {course.instructors ? Object.keys(course.instructors).map((instructor) => (
                            <p key={instructor} className="text-sm px-2">{instructor}</p>
                        )) : <p className="text-sm px-2"> - </p>}
                    </div>
                    <div className="font-medium flex justify-between pr-6">
                        <p>{course.institute} | {course.code}</p>
                        <p className='font-light text-sm self-end'>{course.get_comments ? course.get_comments.length : 0} reviews</p>
                    </div>
                </div>

                <div className="w-1/6 self-center px-3 py-2">
                    <div className="text-6xl font-medium text-center center">
                        {course.avg_rating ? course.avg_rating.toFixed(1) : '-'}
                    </div>
                </div>

                <div className="w-1/5 self-center">
                    <div className="self-center grid grid-rows-4 pl-5 pr-3 gap-x-6 text-sm">
                        <div className="flex justify-between">
                            <p className="font-semibold"> Difficulty:  </p>
                            <p>
                                {course.avg_difficulty ? course.avg_difficulty === 1 ? (<div className="text-green-200">Very Easy</div>)
                                    : course.avg_difficulty === 2 ? (<div className="text-yellow-200">Easy</div>)
                                        : course.avg_difficulty === 3 ? (<div className="text-orange-200">Medium</div>)
                                            : course.avg_difficulty === 4 ? (<div className="text-red-200">Hard</div>)
                                                : (<div className="text-red-200">Very Hard</div>)
                                    : (<div> - </div>)}
                            </p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold"> Workload:  </p>
                            <p>
                            {course.avg_workload ? course.avg_workload === 1 ? (<div className="text-green-200">Very Low</div>)
                    : course.avg_workload === 2 ? (<div className="text-yellow-200">Low</div>)
                      : course.avg_workload === 3 ? (<div className="text-orange-200">Medium</div>)
                        : course.avg_workload === 4 ? (<div className="text-red-200">High</div>)
                          : (<div className="text-red-200">Very High</div>)
                    : (<div> - </div>)}
                            </p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold whitespace-nowrap"> Class size:  </p>
                            <p>
                            {course.avg_class_size ? course.avg_class_size >= 2.5 ? ('Large')
                    : course.avg_class_size >= 1.5 ? ('Medium')
                      : ('Small')
                    : (' - ')}
                            </p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold"> Avg Grade:  </p>
                            <p> {course.avg_grade ? course.avg_grade.toFixed(2) : '-'} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}