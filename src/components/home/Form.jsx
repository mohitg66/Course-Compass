import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { useApi } from '../../ApiContext.jsx';

function ReviewForm() {
    const [formData, setFormData] = useState({
        user: null,
        course: null,
        course_rating: null,
        instructor_rating: null,
        difficulty: null,
        workload: null,
        class_size: null,
        grade: null,
        comment: '',
        anonymous: false,
    });

    // const { loading, error } = useApi();
    const { courses: data , loading, error } = useApi();
    console.log(data, loading, error);

    const [courses, setCourses] = useState([]);

    const [stateOfReview, setStateOfReview] = useState(true)

    // Fetch courses from data context and set them in the state
    useEffect(() => {
        if (data) {
            setCourses(data.map((course) => ({
                value: course.id,
                label: course.acronym + ' - ' + course.name + ' (' + course.instructor + ')',
            })));
        }
    }, [data]);

    const handleInputChange = (name, selectedOption) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: selectedOption,
        }));
    };

    const handleCommentChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            comment: e.target.value,
        }));
    };

    const is_valid = (formData) => {
        if (
            formData.course === null ||
            formData.course_rating === null ||
            formData.instructor_rating === null ||
            // formData.difficulty === null ||
            // formData.workload === null ||
            // formData.class_size === null ||
            formData.grade === null
        ) return false;
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!is_valid(formData)) {
            alert('Form data is not valid');
            return;
        }
        
        // take confirmation from user
        if (!confirm("Are you sure you want to submit the review? You may not be able to edit/ delete it later.")) {
            return;
        }

        formData.user = parseInt(localStorage.getItem('user_id'));
        formData.course = formData.course.value;
        formData.course_rating = parseInt(formData.course_rating.value);
        formData.instructor_rating = formData.instructor_rating ? parseInt(formData.instructor_rating.value) : null;
        formData.difficulty = formData.difficulty ? parseInt(formData.difficulty.value) : null;
        formData.workload = formData.workload ? parseInt(formData.workload.value) : null;
        formData.class_size = formData.class_size ? parseInt(formData.class_size.value) : null;
        formData.grade = parseInt(formData.grade.value);
        formData.anonymous = formData.anonymous ? true : false;
        console.log('Submitting review...', formData);

        axios.post(window.API + '/api/reviews/', formData, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then((response) => {
                console.log('Review submitted successfully:', response.data);
                // Optionally, you can reset the form after submission
                setFormData({
                    user: null,
                    course: null,
                    course_rating: null,
                    instructor_rating: null,
                    difficulty: null,
                    workload: null,
                    class_size: null,
                    grade: null,
                    comment: '',
                    anonymous: false,
                });
                setStateOfReview(false);
                // setStateOfReview true after 5 seconds
                setTimeout(() => {
                    setStateOfReview(true);
                }, 5000);
            })
            .catch((error) => {
                console.error('Error submitting review:', error);
                
            });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-3xl mx-4 text-sm lg:text-base lg:mx-auto mt-8 mb-10">
            <div className="grid grid-cols-2 gap-4">
                <div className='col-span-2'>
                    <label htmlFor="course" className="flex gap-1"><p>Course</p> <p className='text-red-600'>*</p></label>
                    <Select
                        id="course"
                        name="course"
                        options={courses}
                        value={formData.course}
                        onChange={(selectedOption) => handleInputChange('course', selectedOption)}
                        isSearchable
                        placeholder= {loading ? 'Loading...' : error ? 'Error loading courses' : 'Select a course...'}
                    />
                </div>
                <div>
                    <label htmlFor="course_rating" className="flex gap-1"><p>Course Rating</p> <p className='text-red-600'>*</p></label>
                    <Select
                        id="course_rating"
                        name="course_rating"
                        options={[
                            { value: '1', label: 'Very Bad' },
                            { value: '2', label: 'Bad' },
                            { value: '3', label: 'Average' },
                            { value: '4', label: 'Good' },
                            { value: '5', label: 'Excellent' },
                        ]}
                        value={formData.course_rating}
                        onChange={(selectedOption) => handleInputChange('course_rating', selectedOption)}
                        isSearchable
                        placeholder="Select a rating..."
                    />
                </div>
                <div>
                    <label htmlFor="instructor_rating" className="flex gap-1"><p>Instructor Rating</p> <p className='text-red-600'>*</p></label>
                    <Select
                        id="instructor_rating"
                        name="instructor_rating"
                        options={[
                            { value: '1', label: 'Very Bad' },
                            { value: '2', label: 'Bad' },
                            { value: '3', label: 'Average' },
                            { value: '4', label: 'Good' },
                            { value: '5', label: 'Excellent' },
                        ]}
                        value={formData.instructor_rating}
                        onChange={(selectedOption) => handleInputChange('instructor_rating', selectedOption)}
                        isSearchable
                        placeholder="Select a rating..."
                    />
                </div>
                <div>
                    <label htmlFor="difficulty" className="block">Difficulty</label>
                    <Select
                        id="difficulty"
                        name="difficulty"
                        options={[
                            { value: '1', label: 'Very Easy' },
                            { value: '2', label: 'Easy' },
                            { value: '3', label: 'Medium' },
                            { value: '4', label: 'Hard' },
                            { value: '5', label: 'Very Hard' },
                        ]}
                        value={formData.difficulty}
                        onChange={(selectedOption) => handleInputChange('difficulty', selectedOption)}
                        isSearchable
                        placeholder="Select a difficulty..."
                    />
                </div>
                <div>
                    <label htmlFor="workload" className="block">Workload</label>
                    <Select
                        id="workload"
                        name="workload"
                        options={[
                            { value: '1', label: 'Very Low' },
                            { value: '2', label: 'Low' },
                            { value: '3', label: 'Medium' },
                            { value: '4', label: 'High' },
                            { value: '5', label: 'Very High' },
                        ]}
                        value={formData.workload}
                        onChange={(selectedOption) => handleInputChange('workload', selectedOption)}
                        isSearchable
                        placeholder="Select a workload..."
                    />
                </div>
                <div>
                    <label htmlFor="class_size" className="block">Class Size</label>
                    <Select
                        id="class_size"
                        name="class_size"
                        options={[
                            { value: '1', label: 'Small' },
                            { value: '2', label: 'Medium' },
                            { value: '3', label: 'Large' },
                        ]}
                        value={formData.class_size}
                        onChange={(selectedOption) => handleInputChange('class_size', selectedOption)}
                        isSearchable
                        placeholder="Select a class size..."
                    />
                </div>
                <div>
                    <label htmlFor="grade" className="flex gap-1"><p>Grade</p> <p className='text-red-600'>*</p></label>
                    <Select
                        id="grade"
                        name="grade"
                        options={[
                            { value: '10', label: '10' },
                            { value: '9', label: '9' },
                            { value: '8', label: '8' },
                            { value: '7', label: '7' },
                            { value: '6', label: '6' },
                            { value: '5', label: '5' },
                            { value: '4', label: '4' },
                            { value: '3', label: '3' },
                            { value: '2', label: '2' },
                            { value: '1', label: '1' },
                        ]}
                        value={formData.grade}
                        onChange={(selectedOption) => handleInputChange('grade', selectedOption)}
                        isSearchable
                        placeholder="Select your grade..."
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="comment" className="block">Comment</label>
                    <textarea name="comment" id="comment" value={formData.comment} placeholder='Write a descriptive review here...'
                    onChange={handleCommentChange} className="w-full h-32 border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className='flex col-span-2 -mt-1 pb-4'>
                    <input type="checkbox" name="anonymous" id="anonymous" checked={formData.anonymous}
                        onChange={(e) => setFormData((prevData) => ({ ...prevData, anonymous: e.target.checked }))} />
                    <label htmlFor="anonymous" className="ml-2">Post as Anonymous</label>
                </div>
            </div>
            {stateOfReview ? (
                <div className="flex items-center gap-3 mt-2">
                    <button type="submit" className="block py-2 px-5 text-center text-white font-medium bg-blue-600 duration-150 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg hover:shadow-none"
                        onClick= {handleSubmit}
                    >
                        Submit
                    </button>
                </div>) : (

                <div className="mt-2 px-4 rounded-md border border-green-200 bg-green-50 w-full md:mr-auto md:px-4">
                    <div className="flex justify-between py-3">
                        <div className="flex">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rounded-full text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="self-center ml-3">
                                <span className="text-green-600 font-semibold">
                                    Success
                                </span>
                                <p className="text-green-600 mt-1">
                                    Your Review has been posted successfully!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}

export default ReviewForm;
