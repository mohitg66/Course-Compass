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
        <div className="px-3 lg:px-10 py-4 lg:py-6 bg-primary-600 rounded-lg shadow-lg dark:bg-primary">
            <div className="flex justify-between divide-x text-primary-50">
                <div className="flex-1 flex-col lg:px-3">

                    <h3 className="flex flex-col lg:flex-row lg:gap-2 lg:items-end">
                        <p className='hidden lg:block lg:text-2xl font-bold'>{course.acronym} - {course.name}</p>
                        <p className='lg:hidden font-semibold'>{course.name}</p>
                    </h3>

                    <div className="">
                        <p className='text-sm lg:text-base'> {course.instructor}</p>
                    </div>
                    <div className="font-medium flex justify-between pr-2 lg:pr-6">
                        <p className='text-sm lg:text-base'>{course.codes} | {course.institute}</p>
                        <p className='hidden lg:block font-light text-xs lg:text-sm self-end'>{course.comments_count} reviews</p>
                    </div>
                </div>

                <div className="w-1/5 lg:w-1/6 self-center px-3 py-3 lg:py-2">
                    <div className="text-lg lg:text-6xl font-medium text-center center">
                        {course.avg_rating ? course.avg_rating.toFixed(1) : '-'}
                    </div>
                </div>

                <div className="hidden lg:block w-1/5 self-center">
                    <div className="self-center grid grid-rows-4 pl-5 pr-3 gap-x-6 text-sm">
                        <div className="flex justify-between">
                            <p className="font-semibold"> Difficulty:  </p>
                            <div>
                                {course.avg_difficulty ? course.avg_difficulty === 1 ? (<div className="text-green-200">Very Easy</div>)
                                    : course.avg_difficulty === 2 ? (<div className="text-yellow-200">Easy</div>)
                                        : course.avg_difficulty === 3 ? (<div className="text-orange-200">Medium</div>)
                                            : course.avg_difficulty === 4 ? (<div className="text-red-200">Hard</div>)
                                                : (<div className="text-red-200">Very Hard</div>)
                                    : (<div> - </div>)}
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold"> Workload:  </p>
                            <div>
                            {course.avg_workload ? course.avg_workload === 1 ? (<div className="text-green-200">Very Low</div>)
                    : course.avg_workload === 2 ? (<div className="text-yellow-200">Low</div>)
                      : course.avg_workload === 3 ? (<div className="text-orange-200">Medium</div>)
                        : course.avg_workload === 4 ? (<div className="text-red-200">High</div>)
                          : (<div className="text-red-200">Very High</div>)
                    : (<div> - </div>)}
                            </div>
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