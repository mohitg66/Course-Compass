export default ({course}) => {
    return (
        <div className="px-10 py-6 bg-primary-600 rounded-lg shadow-lg dark:bg-primary">
            <div className="flex justify-between divide-x text-primary-50">
                <div className="flex-1 flex-col px-3">
                    <h3 className="text-2xl font-bold">
                        {course.title}
                    </h3>
                    <div className="flex flex-row divide-x divide-primary-100">
                        {course.instructors.map((instructor) => (
                            <div className=" text px-3 first:pl-0">
                                <p>{instructor}</p>
                            </div>
                        ))}
                    </div>
                    <div className="font-medium">
                        <p>{course.institute}</p>
                    </div>
                </div>

                <div className="w-1/6 self-center px-3 py-2">
                    <div className="text-6xl font-medium text-center center">
                        {course.rating}
                    </div>
                </div>

                <div className="w-1/6 self-center">
                    <div className="self-center grid grid-rows-4 pl-5 pr-3 gap-x-6 text-sm">
                        <div className="flex justify-between">
                            <p className="font-semibold"> Instructor:  </p>
                            <p> {course.instructor_rating} </p>
                        </div>

                        <div className="flex justify-between">

                            <p className="font-semibold"> Difficulty:  </p>
                            <p> {course.difficulty} </p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold"> Workload:  </p>
                            <p> {course.workload} </p>
                        </div>

                        <div className="flex justify-between">
                            <p className="font-semibold whitespace-nowrap"> Class size:  </p>
                            <p> {course.size} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}